"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { LanguageToggle } from "@/components/i18n/language-toggle";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { site } from "@/content/site";

export function Header() {
  const { t } = useLanguage();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-nav-border bg-nav backdrop-blur-[20px] backdrop-saturate-[1.8]">
      <div className="mx-auto flex h-[52px] max-w-[980px] items-center justify-between gap-4 px-[22px]">
        <a
          href="#top"
          aria-label={`${site.brand}.dev — ${t.nav.home}`}
          className="font-mono text-[15px] font-semibold tracking-[-0.02em] whitespace-nowrap text-foreground"
        >
          {site.brand}
          <span className="text-primary">.dev</span>
        </a>

        <nav className="flex items-center gap-[26px]">
          <ul className="flex items-center gap-[26px] max-[680px]:hidden">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[12.5px] tracking-[-0.01em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle label={t.nav.toggleTheme} />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
