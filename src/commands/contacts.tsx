import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";
import React from "react";

export const contactsCommand: Command = {
    name: "contacts",
    description: "Show my contacts",
    replayMode: ReplayMode.Normal,

    execute(terminalAPI: TerminalAPI): void {
        const output: React.ReactElement = (

        );
        terminalAPI.write(output);
    }
}