import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { commands } from "@/commands/contactCommands/registry";
import { ReplayMode } from "@/types/ReplayMode";
import CommandButton from "@/commands/CommandButton";

export const contactsCommand: Command = {
  name: "contacts",
  description: "Show my contacts",
  descriptionKey: "commands.contactCommands.contacts.description",
  replayMode: ReplayMode.Normal,

  execute(terminalAPI: TerminalAPI): void {
    const output = commands
      .map(
        (command) => {
          return (
            <>
              <p>{terminalAPI.translate("Available contacts:", "commands.contactCommands.contacts.availableContacts")}</p>
              <CommandButton
                key={command.name}
                command={command}
                onClick={terminalAPI.inputCommand.bind(terminalAPI)}
                translate={terminalAPI.translate.bind(terminalAPI)}
              />
              <p>Type contacts [commandName] </p>
            </>
          )
        });
    terminalAPI.write(output);
  }
}