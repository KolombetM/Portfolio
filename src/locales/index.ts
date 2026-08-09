export const languages = ["en", "fr"] as const;
export type Language = (typeof languages)[number];
export type Translation = Record<string, unknown>;

const localeLoaders: Record<Language, () => Promise<Translation>> = {
  en: () =>
    import("@/locales/translations/en").then((module) => module.default),

  fr: () =>
    import("@/locales/translations/fr").then((module) => module.default),
};

const cache = new Map<Language, Promise<Translation>>();

export function loadTranslation(language: Language) {
  if (!cache.has(language)) {
    cache.set(language, localeLoaders[language]());
  }

  return cache.get(language)!;
}