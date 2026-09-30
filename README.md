# yangabriel.dev

Portfólio pessoal de **Yan Gabriel**, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor full-stack júnior.

É uma página única com as seções Hero, Sobre, Stack, Projetos e Contato. Tem tema claro/escuro e conteúdo em português e inglês.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) como base, pronta para componentes do [21st.dev](https://21st.dev)
- [next-themes](https://github.com/pacocoursey/next-themes) para o tema claro/escuro

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

- `npm run build`: build de produção
- `npm run lint`: ESLint

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| E-mail, redes sociais, stack e links dos projetos | `src/content/site.ts` |
| Textos em português (bio, descrições, versículos) | `src/content/translations/pt.ts` |
| Textos em inglês | `src/content/translations/en.ts` |
| Formato dos textos, igual para os dois idiomas | `src/types/content.ts` |

Se faltar um campo em algum idioma, o TypeScript acusa o erro.

## Idioma

O botão PT/EN salva a escolha em um cookie. Na primeira visita, o site abre em português quando o navegador está em português e em inglês nos demais casos.

## Adicionando componentes do 21st.dev

O projeto já tem o `components.json` do shadcn. Para instalar um componente:

```bash
npx shadcn@latest add "<url do componente>"
```

Os arquivos vão para `src/components/ui/` e usam as cores do tema definidas em `src/app/globals.css`.

## Deploy

O projeto foi pensado para a [Vercel](https://vercel.com/new): basta importar o repositório e fazer o deploy, sem configuração extra. A imagem de preview para redes sociais (`src/app/opengraph-image.tsx`) é gerada no build.

## Créditos

- Design inspirado em [souzaadev.vercel.app](https://souzaadev.vercel.app).
- Fonte JetBrains Mono, sob a SIL Open Font License (`src/assets/fonts/OFL.txt`).
