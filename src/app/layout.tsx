import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { cookies, headers } from "next/headers";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { site } from "@/content/site";
import {
  dictionaries,
  htmlLang,
  isLocale,
  LOCALE_COOKIE,
  localeFromAcceptLanguage,
  ogLocale,
} from "@/lib/i18n";
import type { Locale } from "@/types/content";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(value)) return value;
  return localeFromAcceptLanguage((await headers()).get("accept-language"));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { title, description } = dictionaries[locale].meta;
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: `${site.brand}.dev`,
      title,
      description,
      locale: ogLocale[locale],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html lang={htmlLang[locale]} className={jetbrainsMono.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
