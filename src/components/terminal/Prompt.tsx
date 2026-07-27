"use client";
import { KeyboardEvent } from "react";
import { Caret } from "./Caret";
import { CommandHistory } from "./CommandHistory";

type PromptProps = {
  command: string;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  onChange: (command: string) => void;
  onSubmit: () => void;
  commandHistory: CommandHistory;
};

export default function Prompt({
  command,
  inputRef,
  onChange,
  onSubmit,
  commandHistory
}: PromptProps) {

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        if (command.trim() === "") return;
        onSubmit();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevCommand = commandHistory.previous();
        if (prevCommand !== undefined)
          onChange(prevCommand);
        break;
      case "ArrowDown":
        e.preventDefault();
        const nextCommand = commandHistory.next();
        onChange(nextCommand ?? "");
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex items-center font-mono">

      <div className="w-full font-mono whitespace-pre-wrap break-all">
        <span className="text-green-400">mykola</span>
        <span className="text-white">@</span>
        <span className="text-blue-400">portfolio</span>
        <span className="text-white">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-white">$ </span>

        <span className="text-white">{command}</span>
        <Caret />
      </div>


      <textarea
        ref={inputRef}
        value={command}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={true}
        onKeyDown={handleKeyDown}
        className="fixed top-0 left-0 w-px h-px opacity-0"
      />
    </div>
  );
}