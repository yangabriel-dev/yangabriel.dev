"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { CopyButton } from "@/components/ui/copy-button";
import { AccentRule, Section } from "@/components/ui/section";
import { SlideGlowLink } from "@/components/ui/slide-glow-button";
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
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        <SlideGlowLink
          href={`mailto:${site.email}`}
          text={t.contact.emailCta}
          variant="primary"
          className="text-xl"
        />
        <SlideGlowLink href={site.linkedin} text="LinkedIn" external className="text-xl" />
        <SlideGlowLink href={site.github} text="GitHub" external className="text-xl" />
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <span className="font-mono text-[13px] text-muted-foreground">{site.email}</span>
        <CopyButton value={site.email} label={t.contact.copyEmail} copiedLabel={t.contact.copied} />
      </div>

      <AccentRule className="mt-16 mb-10" />
      <VerseQuote verse={t.verses.closing} />

      <p className="mt-14 font-mono text-xs text-faint">
        © {new Date().getFullYear()} {site.name} — {t.contact.location}
      </p>
    </Section>
  );
}
