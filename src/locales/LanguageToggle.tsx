"use client";

import { Language, translations } from "@/locales/index";
import { useContext } from "react";
import { I18nContext } from "./I18nContext";

export default function LanguageToggler() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("Context not provided");
  }
  
  const { setLanguage } = context;

  function toggleLanguage(lang: Language) {
    setLanguage(lang);
  }

  return (
   <div className="flex gap-2">
  <LanguageButton
    active={language === "en"}
    onClick={() => setLanguage("en")}
  >
    EN
  </LanguageButton>

  <LanguageButton
    active={language === "fr"}
    onClick={() => setLanguage("fr")}
  >
    FR
  </LanguageButton>
</div>
  )
}