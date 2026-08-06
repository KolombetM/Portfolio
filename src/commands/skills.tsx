import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import { Command } from "@/types/command";
import { ReplayMode } from "@/types/ReplayMode";

const skills = [
  {
    category: "Backend",
    items: [
      "Java",
      "Node.js",
      "Python",
      "REST APIs",
      "Webhooks",
      "JWT",
      "Payment Systems",
      "KYC Integration",
      "Transaction Processing",
      "Event-Driven Architecture",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Databases",
    items: [
      "SQL",
      "NoSQL",
    ],
  },
  {
    category: "Dev Tools",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Postman",
      "Jira",
    ],
  },
  {
    category: "Practices",
    items: [
      "Agile",
      "Scrum",
      "Code Review",
      "API Design",
      "System Integration",
    ],
  },
];

export const skillsCommand: Command = {
  name: "skills",
  description: "Show my skills",
  descriptionKey: "commands.skills.description",
  replayMode: ReplayMode.Normal,

  execute(terminalAPI: TerminalAPI): void {

    function toCamelCase(str: string): string {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .split(/\s+/)
        .map((word, index) =>
          index === 0
            ? word
            : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
    }

    const output = (
      <div className="space-y-6 font-mono">
        {skills.map((skillCategory) => (
          <section key={skillCategory.category}>
            <div>
              <h2 className="text-green-300 font-bold">{terminalAPI.translate(skillCategory.category, "commands.skills." + toCamelCase(skillCategory.category))}</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <li className="rounded border border-green-500 px-2 py-1" key={item}>{terminalAPI.translate(item, "commands.skills." + toCamelCase(item))}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    );

    terminalAPI.write(output);
  }
}