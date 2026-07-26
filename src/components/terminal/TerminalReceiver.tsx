import { executeCommand } from '@/commands/commandExcecutor';
import { TerminalReceiverInterface } from './TerminalReceiverInterface';

type SetHistory = React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
type SetCommand = React.Dispatch<React.SetStateAction<string>>;
export class TerminalReceiver implements TerminalReceiverInterface {

  private translator: (
    fallback: string,
    key?: string
  ) => string = (fallback, _) => fallback;

  constructor(private setOutputHistory: SetHistory,
    private setCommand: SetCommand
  ) { }

  setTranslator(
    translator: (
      fallback: string,
      key?: string
    ) => string
  ) {
    this.translator = translator;
  }

  translate(fallback: string, key?: string) {
    return this.translator(fallback, key);
  }

  clearOutput(): void {
    this.setOutputHistory([]);
  }

  write(output: React.ReactNode): void {
    this.setOutputHistory((prevHistory) => [...prevHistory, output]);
  }

  excecuteCommand(command: string): void {
    console.log(`Executing command: ${command}`);
    executeCommand(command, this);
    this.setCommand("");
  }

  async inputCommand(command: string): Promise<void> {
    let current = "";

    for (const char of command) {
      current += char;
      this.setCommand(current);
      await new Promise((resolve) => setTimeout(resolve, 15));
    }

    this.excecuteCommand(current);
  }

  openUrl(url: string): void {
    window.open(url, "_blank");
  }

  downloadFile(path: string, url: string): void {
    const link = document.createElement("a");
    link.href = path;
    link.download = url ?? "";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}