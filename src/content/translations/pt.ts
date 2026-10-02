import type { Dictionary } from "@/types/content";

export const pt: Dictionary = {
  meta: {
    title: "Yan Gabriel — Desenvolvedor Full-Stack Júnior",
    description:
      "Portfólio de Yan Gabriel, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor full-stack júnior.",
  },
  nav: {
    about: "Sobre",
    stack: "Stack",
    projects: "Projetos",
    contact: "Contato",
    home: "Início",
    darkMode: "Modo escuro",
    switchLanguage: "Mudar idioma para inglês",
  },
  hero: {
    eyebrow: "Estudante de ADS · Desenvolvedor Full‑Stack Júnior",
    verse: {
      text: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem‑sucedidos.",
      reference: "Provérbios 16:3",
    },
    bio: "Sou Yan Gabriel, estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e aprendizado contínuo. Nas horas vagas, amo construir landing pages criativas, unindo design cuidadoso e código bem feito.",
    emailCta: "Enviar e-mail",
    projectsCta: "Ver projetos",
  },
  about: {
    eyebrow: "Sobre",
    paragraph: [
      { text: "Estudante de Análise e Desenvolvimento de Sistemas e dev full-stack júnior em busca de estágio. Trabalho com " },
      { text: "React", highlight: true },
      { text: ", " },
      { text: "Next.js", highlight: true },
      { text: " e " },
      { text: "TypeScript", highlight: true },
      { text: ", com experiência em apps desktop com " },
      { text: "Electron", highlight: true },
      { text: ". Apaixonado por criar soluções que unem tecnologia, criatividade e boas práticas de engenharia." },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Ferramentas com que trabalho",
  },
  projects: {
    eyebrow: "Projetos",
    title: "Coisas que construí",
    sourceLabel: "Código no GitHub",
    liveLabel: "Ver online",
    items: {
      neuroflow: {
        title: "NeuroFlow",
        description:
          "App desktop de rotina de estudos baseado em ciência cognitiva, com timer de sessões, XP, níveis, conquistas e estatísticas. Banco SQLite local e comunicação tipada entre os processos via IPC.",
      },
      "api-champions": {
        title: "Api-Champions",
        description:
          "API REST de jogadores e clubes da Champions League, com CRUD completo de jogadores, arquitetura em camadas (controllers, services, repositories e models) e testes automatizados.",
      },
      devlingo: {
        title: "Devlingo",
        description:
          "Plataforma gamificada para aprender programação no estilo Duolingo: unidades com lições, XP, missões diárias, sequência de dias e ligas.",
      },
      h3d: {
        title: "H3D Impressão 3D",
        description:
          "Landing page da H3D Impressão 3D, com catálogo de suportes para notebook e celular e pedidos direto pelo WhatsApp.",
      },
    },
  },
  contact: {
    title: "Vamos conversar.",
    subtitle:
      "Aberto a oportunidades de estágio, parcerias, colaborações ou só uma boa conversa sobre tecnologia.",
    emailCta: "Enviar e-mail",
    copyEmail: "Copiar e-mail",
    copied: "E-mail copiado",
    location: "Brasil",
  },
  verses: {
    afterHero: {
      text: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça-o em todos os seus caminhos, e ele endireitará as suas veredas.",
      reference: "Provérbios 3:5-6",
    },
    afterAbout: {
      text: "Mas busquem primeiro o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.",
      reference: "Mateus 6:33",
    },
    closing: {
      text: "E tudo o que fizerem, seja em palavra ou em ação, façam-no em nome do Senhor Jesus, dando graças a Deus Pai por meio dele.",
      reference: "Colossenses 3:17",
    },
  },
};
