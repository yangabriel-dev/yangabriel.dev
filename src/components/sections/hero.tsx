"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { AccentRule, Eyebrow, Section } from "@/components/ui/section";
import { SlideGlowLink } from "@/components/ui/slide-glow-button";
import { SocialLinks } from "@/components/ui/social-links";
import { site } from "@/content/site";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <Section id="top" bordered={false} className="pt-24 pb-[104px] text-center">
      <Eyebrow>{hero.eyebrow}</Eyebrow>
      <h1 className="mx-auto mt-[22px] max-w-[19ch] text-[46px] text-balance leading-[1.1] font-semibold tracking-[-0.03em] text-foreground max-[680px]:text-[34px]">
        “{hero.verse.text}”
      </h1>
      <p className="mt-5 font-mono text-[13px] text-faint">{hero.verse.reference}</p>

      <AccentRule className="my-[30px]" />

      <p className="mx-auto max-w-[62ch] text-[21px] leading-[1.55] tracking-[-0.01em] text-muted-foreground max-[680px]:text-lg">
        {hero.bio}
      </p>

      <div className="mt-[34px] flex flex-wrap justify-center gap-x-8 gap-y-4">
        <SlideGlowLink
          href={`mailto:${site.email}`}
          text={hero.emailCta}
          variant="primary"
          className="text-xl"
        />
        <SlideGlowLink href="#projects" text={hero.projectsCta} className="text-xl" />
      </div>

      <SocialLinks className="mt-[34px]" />
    </Section>
  );
}
