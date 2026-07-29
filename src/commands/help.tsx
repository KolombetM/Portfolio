import { Command } from "@/types/command";
import { commands } from "@/commands/registry";
import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { ReplayMode } from "@/types/ReplayMode";
import CommandButton from "@/commands/CommandButton";

export const helpCommand: Command = {
  name: "help",
  description: "Show available commands",
  descriptionKey: "commands.help.description",
  replayMode: ReplayMode.Normal,

  execute(terminalAPI: TerminalAPI): void {
    let output = commands
      .map(
        (command) => {
          return (
            <CommandButton
              key={crypto.randomUUID()}
              command={command}
              onClick={terminalAPI.inputCommand.bind(terminalAPI)}
              translate={terminalAPI.translate.bind(terminalAPI)}
            />
          )
        });

    terminalAPI.write(output);
  }
}