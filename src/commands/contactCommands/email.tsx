import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const emailCommand: Command = {
  name: "Email",
  description: "kolya.kolombet@gmail.com",
  descriptionKey: "commands.contactCommands.email.description",
  replayMode: ReplayMode.Never,

  execute(terminalAPI: TerminalAPI): void {
    console.log("print email");
  }
}