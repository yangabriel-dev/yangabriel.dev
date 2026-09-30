"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { Section, SectionHeader } from "@/components/ui/section";
import { stack } from "@/content/site";

export function Stack() {
  const { t } = useLanguage();

  return (
    <Section id="stack">
      <SectionHeader eyebrow={t.stack.eyebrow} title={t.stack.title} />
      <ul className="mt-[34px] flex flex-wrap justify-center gap-2.5">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-card px-[15px] py-[7px] font-mono text-[12.5px] text-body"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
