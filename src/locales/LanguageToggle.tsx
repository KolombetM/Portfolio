"use client";

import { Language, translations } from "@/locales/index";
import { useContext } from "react";
import { I18nContext } from "./I18nContext";

export default function LanguageToggler() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("Context not provided");
  }

  const { setLanguage, language } = context;

  const languages = Object.keys(translations) as Language[];

  return (
    <div className="flex rounded border border-green-400 overflow-hidden font-mono text-sm">
      {languages.map(lang => {
        return (
          <button
            className={`
              px-2 py-1 transition-colors
              ${language === lang
                ? "bg-green-400 text-black"
                : "text-green-400 hover:bg-green-400 hover:text-black"}
            `}
            onClick={() => setLanguage(lang)}
            key={lang}
          >
            {lang.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}