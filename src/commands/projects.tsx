import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const projectsCommand: Command = {
  name: "projects",
  description: "Show my projects",
  descriptionKey: "commands.projects.description",
  replayMode: ReplayMode.Normal,

  execute(terminalAPI: TerminalAPI): void {
    const t = terminalAPI.translate.bind(terminalAPI);

    const output = (
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">{t("Foree Remittance (Nanopay)", "commands.projects.firstProject.title")}</h3>
        <p>
          {t("If you see this let me know :)", "commands.projects.firstProject.description")}
        </p>
        <h3 className="text-lg font-bold">{t("Terminal Portfolio (Personal)", "commands.projects.secondProject.title")}</h3>
        <p>
          {t("If you see this let me know :)", "commands.projects.secondProject.description")}
        </p>
        <h3 className="text-lg font-bold">{t("Bus Booking website (Personal)", "commands.projects.thirdProject.title")}</h3>
        <p>
          {t("If you see this let me know :)", "commands.projects.thirdProject.description")}
        </p>
      </div>
    )
    terminalAPI.write(output);
  }
}