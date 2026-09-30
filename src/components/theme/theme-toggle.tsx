"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="grid size-[34px] cursor-pointer place-items-center rounded-full border border-control-border bg-transparent text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Moon size={16} strokeWidth={2.2} aria-hidden className="dark:hidden" />
      <Sun size={16} strokeWidth={2.2} aria-hidden className="hidden dark:block" />
    </button>
  );
}
