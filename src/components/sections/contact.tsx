"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { PillButton } from "@/components/ui/pill-button";
import { AccentRule, Section } from "@/components/ui/section";
import { VerseQuote } from "@/components/ui/verse";
import { site } from "@/content/site";

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" as="footer" className="text-center">
      <h2 className="text-[44px] leading-[1.07] font-semibold tracking-[-0.03em] text-foreground max-[680px]:text-[34px]">
        {t.contact.title}
      </h2>
      <p className="mx-auto mt-[18px] mb-[30px] max-w-[48ch] text-[19px] leading-[1.55] text-muted-foreground">
        {t.contact.subtitle}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <PillButton href={`mailto:${site.email}`}>{t.contact.emailCta}</PillButton>
        <PillButton href={site.linkedin} variant="outline" external>
          LinkedIn
        </PillButton>
        <PillButton href={site.github} variant="outline" external>
          GitHub
        </PillButton>
      </div>

      <AccentRule className="mt-16 mb-10" />
      <VerseQuote verse={t.verses.closing} />

      <p className="mt-14 font-mono text-xs text-faint">
        © {new Date().getFullYear()} {site.name} — {t.contact.location}
      </p>
    </Section>
  );
}
