import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const cvEnglishCommand: Command = {
  name: "cvEnglish",
  description: "Open my CV in English",
  descriptionKey: "commands.contactCommands.cvEnglish.description",
  replayMode: ReplayMode.Never,

  execute(terminalAPI: TerminalAPI): void {
  }
}