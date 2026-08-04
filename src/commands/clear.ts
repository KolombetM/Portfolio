import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const clearCommand: Command = {
  name: "clear",
  description: "Clear the terminal output",
  replayMode: ReplayMode.Boundary,

  execute(terminalAPI: TerminalAPI): void {
    terminalAPI.clearOutput();
  }
};