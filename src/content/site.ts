import type { ProjectFacts } from "@/types/content";

export const site = {
  name: "Yan Gabriel",
  brand: "yangabriel",
  email: "yangabriel.dev@gmail.com",
  github: "https://github.com/yangabriel-dev",
  linkedin: "https://www.linkedin.com/in/yangabrieldev/",
  instagram: "https://www.instagram.com/eu_oyangabriel.dev/",
} as const;

// Vídeo do PrismaHero (21st.dev), hospedado pelo autor do componente. O poster é
// o primeiro quadro dele e aparece no celular e antes de o vídeo carregar.
export const heroMedia = {
  video:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  poster: "/hero-poster.webp",
} as const;

export const socialLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Instagram", href: site.instagram },
] as const;

export const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Electron",
  "Tailwind CSS",
  "SQL",
  "Python",
  "Git",
] as const;

export const projects: ProjectFacts[] = [
  {
    id: "neuroflow",
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    githubUrl: "https://github.com/yangabriel-dev/NeuroFLow",
  },
  {
    id: "api-champions",
    tags: ["Node.js", "Express", "TypeScript", "REST API"],
    githubUrl: "https://github.com/yangabriel-dev/Api-Champions",
  },
  {
    id: "devlingo",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    githubUrl: "https://github.com/yangabriel-dev/Devlingo",
    liveUrl: "https://devlingo-dusky.vercel.app",
  },
  {
    id: "h3d",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/yangabriel-dev/Site-h3d-impressao",
    liveUrl: "https://site-h3d-impressao.vercel.app",
  },
];
