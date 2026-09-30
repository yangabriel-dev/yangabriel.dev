"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const next = locale === "pt" ? "en" : "pt";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={`${next.toUpperCase()} — ${t.nav.switchLanguage}`}
      title={t.nav.switchLanguage}
      className="h-[34px] cursor-pointer rounded-full border border-control-border bg-transparent px-3.5 font-mono text-xs font-semibold tracking-[0.04em] text-foreground uppercase transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {next}
    </button>
  );
}
