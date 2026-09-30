"use client";

import { useEffect, useState } from "react";
import { SlideGlowButton } from "@/components/ui/slide-glow-button";

export function CopyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Sem acesso à área de transferência: o valor continua visível para cópia manual.
    }
  }

  return (
    <>
      <SlideGlowButton
        text={copied ? copiedLabel : label}
        active={copied}
        onClick={copy}
        className="text-sm"
      />
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </>
  );
}
