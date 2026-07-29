import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const gitHubCommand: Command = {
    name: 'GitHub',
    description: "KolombetM",
    descriptionKey: "commands.contactCommands.github.description",
    replayMode: ReplayMode.Never,

    execute(terminalAPI: TerminalAPI): void {
        
    }
}