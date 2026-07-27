import { ReplayMode } from '@/types/ReplayMode';
import { TerminalAPIInterface } from '@/components/terminal/TerminalAPIInterface';
import { commands } from "@/commands/registry";
import { CommandHistory } from '@/components/terminal/CommandHistory';

type SetHistory = React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
type SetCommand = React.Dispatch<React.SetStateAction<string>>;
export class TerminalAPI implements TerminalAPIInterface {

  private translator: (
    fallback: string,
    key?: string
  ) => string = (fallback, _) => fallback;

  constructor(
    private setOutputHistory: SetHistory,
    private setCommand: SetCommand,
    private commandHistory: CommandHistory
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

  executeCommand(input: string): void {
    const command = commands.find(
      (command) => command.name === input
    );

    if (!command) {
      this.write(<div>Command not found: {input}</div>);
      return;
    }

    command.execute(this);
    this.commandHistory.addCommand(command.name);
    this.setCommand("");
  }

  async inputCommand(command: string): Promise<void> {
    let current = "";

    for (const char of command) {
      current += char;
      this.setCommand(current);
      await new Promise((resolve) => setTimeout(resolve, 15));
    }

    this.executeCommand(current);
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

  replayCommands(commandHistory: string[]): void {
    // find boundary command
    let startIndex = 0;
    for (let i = commandHistory.length - 1; i >= 0; i--) {
      const command = commands.find(c => c.name === commandHistory[i]);

      if (command?.replayMode === ReplayMode.Boundary) {
        startIndex = i + 1;
        break;
      }
    }

    for (let i = startIndex; i < commandHistory.length; i++) {
      const command = commands.find(c => c.name === commandHistory[i]);
      if (command !== undefined){
        command.execute(this);
      }
    }
  }
}