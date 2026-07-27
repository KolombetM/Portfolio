import { Command } from "@/types/command";
import { commands } from "@/commands/registry";
import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { ReplayMode } from "@/types/ReplayMode";

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
            <div key={crypto.randomUUID()}>
              <button
                className="cursor-pointer"
                onClick={() => terminalAPI.inputCommand(command.name)}
              >
                <span
                  className="
                    inline-block
                    w-24
                    text-left
                    text-cyan-400
                    hover:underline
                    hover:text-cyan-300
                  "
                >
                  {command.name}
                </span>
              </button>
              - {terminalAPI.translate(command.description, command.descriptionKey)}
            </div>
          )
        });

    terminalAPI.write(output);
  }
};