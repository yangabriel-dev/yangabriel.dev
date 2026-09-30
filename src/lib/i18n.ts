import { en } from "@/content/translations/en";
import { pt } from "@/content/translations/pt";
import type { Dictionary, Locale } from "@/types/content";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "pt";

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };

export function isLocale(value: unknown): value is Locale {
  return value === "pt" || value === "en";
}
