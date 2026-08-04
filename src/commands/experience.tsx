import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

export const experienceCommand: Command = {
  name: "experience",
  description: "Show my experience",
  descriptionKey: "commands.experience.description",
  replayMode: ReplayMode.Normal,

  execute(terminalAPI: TerminalAPI): void {
    const t = terminalAPI.translate.bind(terminalAPI);
    const output =  (
    <div className="space-y-8 text-green-400 font-mono">
      <section>
        <h2 className="text-green-300 text-xl font-bold">
          {t("Full-Stack Software Developer", "commands.experience.firstExperience.title")}
        </h2>

        <p className="text-gray-300">  
          {t("Nanopay - P2P payment platform, Toronto, Canada", "commands.experience.firstExperience.company")}
        </p>

        <p className="text-gray-400">
          {t("Dec 2019 – Jan 2026", "commands.experience.firstExperience.period")}
        </p>

        <ul className="mt-3 space-y-2 list-none">
          <li>
            <span className="text-green-500">➜</span>{" "}
            {t("If you see this message let me know :)", "commands.experience.firstExperience.firstBullet")}
          </li>

          <li>
            <span className="text-green-500">➜</span>{" "}
            {t("If you see this message let me know :)", "commands.experience.firstExperience.secondBullet")}
          </li>

          <li>
            <span className="text-green-500">➜</span>{" "}
            {t("If you see this message let me know :)", "commands.experience.firstExperience.thirdBullet")}
          </li>

          <li>
            <span className="text-green-500">➜</span>{" "}
            {t("If you see this message let me know :)", "commands.experience.firstExperience.fourthBullet")}
          </li>
        </ul>
      </section>


      <section>
        <h2 className="text-green-300 text-xl font-bold">
           {t("Data Scientist / Student Researcher (Co-op)", "commands.experience.secondExperience.title")}
        </h2>

        <p className="text-gray-300">
          {t("Esentire and Conestoga College, Waterloo, ON", "commands.experience.secondExperience.company")}
        </p>

        <p className="text-gray-400">
          {t("Apr 2019 – Aug 2019", "commands.experience.secondExperience.period")}
        </p>

        <ul className="mt-3 space-y-2 list-none">
          <li>
            <span className="text-green-500">➜</span>{" "}
            {t("If you see this message let me know :)", "commands.experience.secondExperience.firstBullet")}
          </li>

          <li>
            <span className="text-green-500">➜</span>{" "}
             {t("If you see this message let me know :)", "commands.experience.secondExperience.secondBullet")}
          </li>

          <li>
            <span className="text-green-500">➜</span>{" "}
             {t("If you see this message let me know :)", "commands.experience.secondExperience.thirdBullet")}
          </li>
        </ul>
      </section>
    </div>
  );
  terminalAPI.write(output);
  }
};