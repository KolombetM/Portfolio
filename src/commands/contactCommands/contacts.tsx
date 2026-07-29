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

  execute(terminalAPI: TerminalAPI, args: string[]): void {
    if (args != undefined) {
      if (args.length > 0 && args.length < 2) {
        const subCommand = commands.find(
          (command) => command.name.toLowerCase() === args[0].toLowerCase()
        );
        if (subCommand != undefined) 
          subCommand.execute(terminalAPI);
        else {
          terminalAPI.write(terminalAPI.translate("Command not found", "commands.contactCommands.contacts.commandNotFound") + " contacts" + args.join(" "));
        }
      } else if (args.length >= 2) {
        terminalAPI.write(terminalAPI.translate("Too many arguments", "commands.contactCommands.contacts.tooManyArguments"));
      }
      return;
    }

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

