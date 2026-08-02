import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const skillsCommand: Command = {
  name: "skills",
  description: "Show my skills",
  descriptionKey: "commands.skills.description",
  replayMode: ReplayMode.Normal,

  execute(terminalAPI: TerminalAPI): void {
  }
}