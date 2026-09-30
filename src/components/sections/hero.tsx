"use client";

import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { Eyebrow } from "@/components/ui/section";
import { SlideGlowLink } from "@/components/ui/slide-glow-button";
import { SocialLinks } from "@/components/ui/social-links";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { heroMedia, site } from "@/content/site";
import { useMediaQuery } from "@/hooks/use-media-query";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function fadeUp(delay: number) {
  return {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay, ease: EASE },
  };
}

// Layout do PrismaHero (21st.dev) adaptado: cartão escuro com vídeo, nome gigante
// e, na coluna da direita, versículo, bio, botões e redes.
export function Hero() {
  const { t } = useLanguage();
  const { hero } = t;
  // O vídeo tem 16 MB: só entra no desktop e sem "reduzir movimento". Nos demais, fica o poster.
  const showVideo = useMediaQuery("(min-width: 768px) and (prefers-reduced-motion: no-preference)");

  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="scroll-mt-[60px] p-2 sm:p-3">
        <div className="relative">
          <div className="dark relative flex min-h-[calc(100svh-53px-1rem)] flex-col overflow-hidden rounded-2xl bg-black text-foreground sm:min-h-[calc(100svh-53px-1.5rem)] md:rounded-[2rem]">
            <Image src={heroMedia.poster} alt="" fill preload sizes="100vw" className="object-cover" />
            {showVideo && (
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-hidden
                poster={heroMedia.poster}
                src={heroMedia.video}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-black/15 to-black/80" />

            <div className="relative z-10 mt-auto grid grid-cols-12 items-end gap-4 px-4 pt-28 pb-6 sm:px-6 md:px-10 lg:pb-10">
              <div className="col-span-12 lg:col-span-8">
                <h1 className="text-[19vw] leading-[0.85] font-medium tracking-[-0.07em] [text-shadow:0_0.04em_0.3em_rgb(0_0_0/0.45)] sm:text-[18vw] md:text-[16vw] lg:text-[13vw] xl:text-[12.5vw]">
                  <WordsPullUp text={site.name} suffix={<span className="text-primary">.</span>} />
                </h1>
              </div>

              <div className="col-span-12 flex flex-col gap-5 lg:col-span-4">
                <motion.figure {...fadeUp(0.5)}>
                  <blockquote className="text-base leading-snug text-foreground/90 sm:text-lg">
                    “{hero.verse.text}”
                  </blockquote>
                  <figcaption className="mt-2 font-mono text-xs tracking-[0.16em] text-primary uppercase">
                    {hero.verse.reference}
                  </figcaption>
                </motion.figure>

                <motion.p {...fadeUp(0.6)} className="text-sm leading-relaxed text-foreground/70">
                  {hero.bio}
                </motion.p>

                <motion.div {...fadeUp(0.7)} className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <SlideGlowLink
                    href={`mailto:${site.email}`}
                    text={hero.emailCta}
                    variant="primary"
                    className="text-base"
                  />
                  <SlideGlowLink href="#projects" text={hero.projectsCta} className="text-base" />
                </motion.div>

                <motion.div {...fadeUp(0.8)}>
                  <SocialLinks className="justify-start" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Aba no topo do cartão, na cor da página, como um recorte (no Prisma era a navegação) */}
          <div className="absolute top-0 left-1/2 z-20 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-b-2xl bg-background px-4 py-2 md:rounded-b-3xl md:px-8">
            <Eyebrow className="text-[10px] sm:text-xs">{hero.eyebrow}</Eyebrow>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
