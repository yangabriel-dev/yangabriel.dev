import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { DEFAULT_LOCALE, dictionaries } from "@/lib/i18n";

const { meta, hero } = dictionaries[DEFAULT_LOCALE];

export const alt = meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const jetbrainsMonoBold = await readFile(
  join(process.cwd(), "src/assets/fonts/JetBrainsMono-Bold.ttf"),
);

// A JetBrains Mono não tem o hífen não separável (U+2011) usado no eyebrow.
const role = hero.eyebrow.replace(/‑/g, "-");

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000000",
          color: "#f5f5f7",
          fontFamily: "JetBrains Mono",
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", fontSize: 34 }}>
          {site.brand}
          <span style={{ color: "#f58a2b" }}>.dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, lineHeight: 1, letterSpacing: -4 }}>{site.name}</div>
          <div
            style={{ width: 64, height: 6, margin: "40px 0", borderRadius: 3, background: "#f58a2b" }}
          />
          <div style={{ fontSize: 26, letterSpacing: 3, textTransform: "uppercase", color: "#f58a2b" }}>
            {role}
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#a1a1a6" }}>React · Next.js · TypeScript · Node.js</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "JetBrains Mono", data: jetbrainsMonoBold, style: "normal", weight: 700 }],
    },
  );
}
