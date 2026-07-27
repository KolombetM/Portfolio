import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { ReplayMode } from "./ReplayMode";

export interface Command {
  name: string;
  description: string;
  // Used for translateion
  descriptionKey?: string;
  replayMode: ReplayMode;
  execute(receiver: TerminalAPI): void;
}