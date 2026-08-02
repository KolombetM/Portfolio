"use client";

import { useContext, useEffect } from "react";
import { I18nContext } from "@/locales/I18nContext";

export default function HtmlLanguage() {
  const { language } = useContext(I18nContext)!;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}