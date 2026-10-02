export type Locale = "pt" | "en";

export interface Verse {
  text: string;
  reference: string;
}

export interface TextSegment {
  text: string;
  highlight?: boolean;
}

export type ProjectId = "neuroflow" | "api-champions" | "devlingo" | "h3d";

export interface ProjectFacts {
  id: ProjectId;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ProjectText {
  title: string;
  description: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    about: string;
    stack: string;
    projects: string;
    contact: string;
    home: string;
    darkMode: string;
    switchLanguage: string;
  };
  hero: {
    eyebrow: string;
    verse: Verse;
    bio: string;
    emailCta: string;
    projectsCta: string;
  };
  about: { eyebrow: string; paragraph: TextSegment[] };
  stack: { eyebrow: string; title: string };
  projects: {
    eyebrow: string;
    title: string;
    sourceLabel: string;
    liveLabel: string;
    items: Record<ProjectId, ProjectText>;
  };
  contact: {
    title: string;
    subtitle: string;
    emailCta: string;
    copyEmail: string;
    copied: string;
    location: string;
  };
  verses: { afterHero: Verse; afterAbout: Verse; closing: Verse };
}
