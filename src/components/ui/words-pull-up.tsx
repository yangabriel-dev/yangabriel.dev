"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Do PrismaHero (21st.dev): as palavras sobem e aparecem em sequência quando o
// texto entra na tela. `suffix` é colado na última palavra (ex.: um ponto colorido).
export function WordsPullUp({
  text,
  suffix,
  className,
}: {
  text: string;
  suffix?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <Fragment key={i}>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="relative inline-block"
              style={{ marginRight: isLast ? 0 : "0.25em" }}
            >
              {word}
              {isLast && suffix}
            </motion.span>
            {/* Espaço real para leitores de tela e buscadores; no flex ele não ocupa lugar */}
            {!isLast && " "}
          </Fragment>
        );
      })}
    </span>
  );
}
