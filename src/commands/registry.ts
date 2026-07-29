import { Command } from "@/types/command";
import { helpCommand } from "@/commands/help";
import { clearCommand } from "@/commands/clear";
import { aboutCommand } from "@/commands/about";
import { cvFranchCommand } from "@/commands/contactCommands/cvFranch";
import { projectsCommand } from "@/commands/projects";
import { contactsCommand } from "./contactCommands/contacts";

export const commands: Command[] = [
    aboutCommand,
    // contactsCommand,
    helpCommand,
    projectsCommand,
    cvFranchCommand,
    clearCommand,
];

