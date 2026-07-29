import { Command } from "@/types/command";
import { cvFranchCommand } from "@/commands/contactCommands/cvFranch";
import { cvEnglishCommand } from "@/commands/contactCommands/cvEnglish";
import { emailCommand } from "@/commands/contactCommands/email";
import { gitHubCommand } from "@/commands/contactCommands/github";
import { linkedinCommand } from "@/commands/contactCommands/linkedin";


export const commands: Command[] = [
  emailCommand,
  gitHubCommand,
  linkedinCommand,
  cvFranchCommand,
  cvEnglishCommand
];