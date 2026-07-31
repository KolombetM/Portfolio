import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const emailCommand: Command = {
  name: "Email",
  description: "kolya.kolombet@gmail.com",
  descriptionKey: "commands.contactCommands.email.description",
  replayMode: ReplayMode.Never,

  execute(terminalAPI: TerminalAPI): void {
    terminalAPI.openEmail("kolya.kolombet@gmail.com?subject=Portfolio&body=Hi%20Mykola,");
    terminalAPI.write(<p>{terminalAPI.translate("Email copied to clipboard", "commands.contactCommands.email.copyCommand")}</p>);
    navigator.clipboard.writeText("kolya.kolombet@gmail.com");
  }
}