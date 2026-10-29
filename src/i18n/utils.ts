import { defaultLang, labels } from "./ui.ts";

export type Locale = keyof typeof labels;

export const languages: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export function getLocale(locale: string | undefined): Locale {
  return locale && locale in labels ? (locale as Locale) : defaultLang;
}

export function useTranslations(lang: Locale) {
  return function translate(key: keyof (typeof labels)[typeof defaultLang]) {
    return labels[lang][key] ?? labels[defaultLang][key];
  };
}
