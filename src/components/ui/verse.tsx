"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { Container } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Dictionary, Verse } from "@/types/content";

export function VerseQuote({ verse, className }: { verse: Verse; className?: string }) {
  return (
    <figure className={cn("mx-auto max-w-[44ch] text-center", className)}>
      <blockquote className="text-[22px] leading-[1.5] font-medium tracking-[-0.015em] text-foreground max-[680px]:text-[19px]">
        <p>“{verse.text}”</p>
      </blockquote>
      <figcaption className="mt-5 font-mono text-xs tracking-[0.16em] text-primary uppercase">
        {verse.reference}
      </figcaption>
    </figure>
  );
}

export function VerseDivider({ verse }: { verse: keyof Dictionary["verses"] }) {
  const { t } = useLanguage();
  return (
    <div className="border-t border-line py-[72px] max-[820px]:py-14">
      <Container>
        <VerseQuote verse={t.verses[verse]} />
      </Container>
    </div>
  );
}
