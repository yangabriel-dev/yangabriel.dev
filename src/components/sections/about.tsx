"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { Eyebrow, Section } from "@/components/ui/section";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="text-center">
      <Eyebrow>{t.about.eyebrow}</Eyebrow>
      <p className="mx-auto mt-5 max-w-[30ch] text-[27px] leading-[1.5] font-medium tracking-[-0.015em] text-foreground max-[680px]:text-[22px]">
        {t.about.paragraph.map((segment, i) =>
          segment.highlight ? (
            <mark
              key={i}
              className="rounded-[6px] bg-accent px-[7px] py-px text-accent-foreground [box-decoration-break:clone]"
            >
              {segment.text}
            </mark>
          ) : (
            <span key={i}>{segment.text}</span>
          ),
        )}
      </p>
    </Section>
  );
}
