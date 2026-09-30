import { en } from "@/content/translations/en";
import { pt } from "@/content/translations/pt";
import type { Dictionary, Locale } from "@/types/content";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "pt";

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };

export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

export function isLocale(value: unknown): value is Locale {
  return value === "pt" || value === "en";
}

// Primeira visita: navegador em português → PT; qualquer outro idioma → EN.
// Sem preferência (sem header ou "*", caso comum de crawlers), fica o idioma padrão.
export function localeFromAcceptLanguage(header: string | null): Locale {
  const first = header?.split(",")[0].split(";")[0].trim().toLowerCase();
  if (!first || first === "*") return DEFAULT_LOCALE;
  return first.startsWith("pt") ? "pt" : "en";
}
