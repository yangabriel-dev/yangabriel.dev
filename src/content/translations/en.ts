import type { Dictionary } from "@/types/content";

export const en: Dictionary = {
  meta: {
    title: "Yan Gabriel — Junior Full-Stack Developer",
    description:
      "Portfolio of Yan Gabriel, Systems Analysis and Development student and junior full-stack developer.",
  },
  nav: {
    about: "About",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
    home: "Home",
    darkMode: "Dark mode",
    switchLanguage: "Switch language to Portuguese",
  },
  hero: {
    eyebrow: "Systems Analysis Student · Junior Full‑Stack Developer",
    verse: {
      text: "Commit to the Lord whatever you do, and he will establish your plans.",
      reference: "Proverbs 16:3",
    },
    bio: "I'm Yan Gabriel, a Systems Analysis and Development student, passionate about technology and continuous learning. In my free time, I love building creative landing pages that combine thoughtful design with well-crafted code.",
    emailCta: "Send e-mail",
    projectsCta: "See projects",
  },
  about: {
    eyebrow: "About",
    paragraph: [
      { text: "Systems Analysis and Development student and junior full-stack developer looking for an internship. I work with " },
      { text: "React", highlight: true },
      { text: ", " },
      { text: "Next.js", highlight: true },
      { text: " and " },
      { text: "TypeScript", highlight: true },
      { text: ", with experience building desktop apps with " },
      { text: "Electron", highlight: true },
      { text: ". Passionate about creating solutions that bring together technology, creativity and solid engineering practices." },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tools I work with",
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I have built",
    sourceLabel: "Source on GitHub",
    liveLabel: "View live",
    items: {
      neuroflow: {
        title: "NeuroFlow",
        description:
          "Desktop study-routine app grounded in cognitive science, with a session timer, XP, levels, achievements and stats. Local SQLite database and typed IPC between processes.",
      },
      "api-champions": {
        title: "Api-Champions",
        description:
          "REST API for Champions League players and clubs, with full player CRUD, a layered architecture (controllers, services, repositories and models) and automated tests.",
      },
      devlingo: {
        title: "Devlingo",
        description:
          "Gamified platform for learning to code, Duolingo-style: lesson units, XP, daily quests, streaks and leagues.",
      },
      h3d: {
        title: "H3D 3D Printing",
        description:
          "Landing page for H3D 3D Printing, featuring a catalog of laptop and phone stands with orders placed directly via WhatsApp.",
      },
    },
  },
  contact: {
    title: "Let's talk.",
    subtitle:
      "Open to internship opportunities, partnerships, collaborations or just a good conversation about technology.",
    emailCta: "Send e-mail",
    copyEmail: "Copy e-mail",
    copied: "E-mail copied",
    location: "Brazil",
  },
  verses: {
    afterHero: {
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      reference: "Proverbs 3:5-6",
    },
    afterAbout: {
      text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      reference: "Matthew 6:33",
    },
    closing: {
      text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
      reference: "Colossians 3:17",
    },
  },
};
