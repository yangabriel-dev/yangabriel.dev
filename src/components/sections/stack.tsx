"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { Section, SectionHeader } from "@/components/ui/section";
import { SlideGlowText, slideGlowHost } from "@/components/ui/slide-glow-button";
import { stack } from "@/content/site";
import { cn } from "@/lib/utils";

export function Stack() {
  const { t } = useLanguage();

  return (
    <Section id="stack">
      <SectionHeader eyebrow={t.stack.eyebrow} title={t.stack.title} />
      <ul className="mt-[34px] flex flex-wrap justify-center gap-x-6 gap-y-3">
        {stack.map((item) => (
          <li key={item} className={cn(slideGlowHost, "text-base")}>
            <SlideGlowText text={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
