import { Command } from "@/types/command";
import { helpCommand } from "@/commands/help";
import { clearCommand } from "@/commands/clear";
import { aboutCommand } from "@/commands/about";
import { cvFranchCommand } from "@/commands/contactCommands/cvFranch";
import { projectsCommand } from "@/commands/projects";
import { contactsCommand } from "@/commands/contactCommands/contacts";
import { cvEnglishCommand } from "@/commands/contactCommands/cvEnglish";
import { experienceCommand } from "@/commands/experience";

export const commands: Command[] = [
    aboutCommand,
    contactsCommand,
    helpCommand,
    projectsCommand,
    cvFranchCommand,
    cvEnglishCommand,
    experienceCommand,
    clearCommand,
];

