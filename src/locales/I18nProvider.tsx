"use client";

import { useEffect, useState } from "react";
import { I18nContext } from "@/locales/I18nContext";
import { Language, loadTranslation, Translation } from "@/locales/index";


export function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");
  const [translation, setTranslation] = useState<Translation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function normalize(value: string): string {
    return value
      .trim()
      .replace(/\s+/g, " ");
  }

  useEffect(() => {
    loadTranslation("en").then((messages) => {
      setTranslation(messages);
      setIsLoading(false);
    });
  }, []);

  async function changeLanguage(nextLanguage: Language) {
    setIsLoading(true);

    const messages = await loadTranslation(nextLanguage);

    setTranslation(messages);
    setLanguage(nextLanguage);
    setIsLoading(false);
  }


  function t(fallback: string, key?: string): string {

    if (!key) {
      return fallback;
    }

    const value = key
      .split(".")
      .reduce<unknown>((obj, part) => {
        if (
          obj &&
          typeof obj === "object" &&
          part in obj
        ) {
          return (obj as Record<string, unknown>)[part];
        }

        return undefined;
      }, translation);

    if (typeof value !== "string") {
      console.warn(`Missing translation: ${key}`);
      return fallback;
    }

    return normalize(value);
  }

 return (
  <I18nContext.Provider value={{ language, changeLanguage, t}}>
    {!translation ? (
      <div className="min-h-screen grid place-items-center">
        Loading…
      </div>
    ) : (
      children
    )}

    {/* {isLoading && translation && (
      <div className="fixed inset-0 grid place-items-center bg-black/40">
        Loading…
      </div>
    )} */}
  </I18nContext.Provider>
);
}