import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const cvFranchCommand: Command = {
  name: "cvFrance",
  description: "Open my CV in French",
  descriptionKey: "commands.contactCommands.cvFrance.description",
  replayMode: ReplayMode.Never,

  execute(terminalAPI: TerminalAPI): void {
    terminalAPI.openUrl("/documents/KolombetFR.pdf");
  }
}