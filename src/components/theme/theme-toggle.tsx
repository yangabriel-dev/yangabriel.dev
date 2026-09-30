"use client";

import { useTheme } from "next-themes";
import { StarWarsToggleSwitch } from "@/components/ui/star-wars-toggle-switch";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // O tema só é conhecido no cliente; até lá checked fica false (o visual já vem certo via CSS).
  const isDark = useMounted() && resolvedTheme === "dark";

  return (
    <StarWarsToggleSwitch
      checked={isDark}
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="[--toggle-size:6px]"
    />
  );
}
