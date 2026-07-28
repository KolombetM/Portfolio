import { Command } from "@/types/command"

type CommandProps = {
    command: Command,
    onClick: (commandName: string) => void,
    translate: (fallback: string, key?: string) => string
}

export default function CommandButton({
    command,
    onClick,
    translate
}: CommandProps) {

    return (
            <div key={crypto.randomUUID()}>
              <button
                className="cursor-pointer"
                onClick={() => onClick(command.name)}
              >
                <span
                  className="
                    inline-block
                    w-24
                    text-left
                    text-cyan-400
                    hover:underline
                    hover:text-cyan-300
                  "
                >
                  {command.name}
                </span>
              </button>
              - {translate(command.description, command.descriptionKey)}
            </div>
          )

};