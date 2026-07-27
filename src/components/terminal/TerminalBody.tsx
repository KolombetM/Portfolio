"use client";
import { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Prompt from "@/components/terminal/Prompt";
import { TerminalAPI } from "@/components/terminal/TerminalAPI";
import React from "react";
import { I18nContext } from "@/locales/I18nContext";
import { CommandHistory } from "@/components/terminal/CommandHistory";

type TerminalBodyProps = {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
};

export default function TerminalBody({ inputRef }: TerminalBodyProps) {
  const [command, setCommand] = useState("");
  const [outputHistory, setOutputHistory] = useState<React.ReactNode[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error("Context not provided");
  }
  const { t, language } = context;

  const commandHistory = useRef(new CommandHistory()).current;

  const terminalAPI = useRef(
    new TerminalAPI(
      setOutputHistory,
      setCommand,
      commandHistory
    )
  ).current;

  useEffect(() => {
    terminalAPI.setTranslator(t);
    terminalAPI.clearOutput();
    terminalAPI.replayCommands(commandHistory.getHistory());
  }, [language])
  

  useLayoutEffect(() => {
     if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
     }
  }, [outputHistory]);

  function handlePromptSubmit() {

    if (command?.trim() === "") return;

    terminalAPI.executeCommand(command);

    setCommand("");
  }

  return (
    <div
    ref={scrollRef}
    className="h-150 p-6 font-mono text-green-400 whitespace-pre-wrap wrap-break-word overflow-y-auto terminal-scroll">
      <p>{t("Welcome to my portfolio.", "terminalBody.welcomMessage")}</p>
      <p>{t("Type", "terminalBody.type1")} "<button
                className="
                text-cyan-400
                  cursor-pointer
                  hover:underline
                  hover:text-cyan-300
                "
                onClick={() => terminalAPI.inputCommand("help")}
              >help</button>" {t("to see available commands.", "terminalBody.type2")}</p>
      
      {/* It is ok to use index as key because we add 1 element or remove all.  */}
      {/* So the order of elements will not change */}
      {outputHistory.map((output, index) => (
        <React.Fragment key={index}>
          {output}
        </React.Fragment>
      ))}

      <Prompt
        inputRef={inputRef}  
        command={command}
        onChange={setCommand}
        onSubmit={() => handlePromptSubmit()}
        commandHistory={commandHistory}
      />
    </div>
  )
}