"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

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

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-[34px] cursor-pointer items-center gap-1.5 rounded-full border border-control-border bg-transparent px-3.5 font-mono text-xs font-semibold tracking-[0.04em] text-foreground uppercase transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Icon size={14} strokeWidth={2.2} aria-hidden className={copied ? "text-primary" : undefined} />
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
