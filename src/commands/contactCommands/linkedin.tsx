import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const linkedinCommand: Command = {
    name: 'Linkedin',
    description: "KolombetM",
    descriptionKey: "commands.contactCommands.linkedin.description",
    replayMode: ReplayMode.Never,

    execute(termianlAPI: TerminalAPI): void {
        
    }
}