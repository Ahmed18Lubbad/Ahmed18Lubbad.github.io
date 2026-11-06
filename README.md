# Ahmed Lubbad — Professional Portfolio

A bilingual English/Arabic portfolio for Ahmed Mahmoud Mohammad Lubbad. Built with Next.js App Router, TypeScript, and Tailwind CSS tooling. The site is a static export: its theme, language, project filters, CV builder, and mailto contact form run in the browser. No server secrets or backend are required.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static website is written to `out/`. To inspect it locally, serve that folder with a static file server (for example `npx serve out`).

## Update content

The profile is centralized in `src/data/profile.ts`:

- `profile`: name, role, contact details, and social profile URLs.
- `experience`: organization, department, role, dates, and responsibilities.
- `education` and `certifications`: academic and training records.
- `skillGroups`: skill categories and their listed skills.
- `projects`: add verified case studies here. The current item is an explicitly labeled placeholder, not a claimed completed project.

English and Arabic interface copy lives in `src/data/translations.ts`. For new content, add both English and Arabic text, then connect it to the component in `src/app/page.tsx`. No LinkedIn or GitHub profile URL is assumed; add a real URL to `profile.linkedin` or `profile.github` when ready.

## CV builder

Visitors can select which profile, experience, education, training, and skills sections to include, choose English or Arabic, preview the result, and use **Print / Save PDF**. In the browser print dialog, choose **Save as PDF**. The CV uses the same profile data source as the portfolio and uses ATS-friendly text and headings. No PDF service or environment variable is needed.

## Contact form

The validated form opens the visitor's configured email application with the message addressed to `lubbad039@gmail.com`. This static site does not transmit or store form submissions. A server-side form provider would require configuring an endpoint separately.

## Deploy

### GitHub Pages

This app uses Next.js static export, so the generated `out/` directory can be served by GitHub Pages. The included `.github/workflows/deploy.yml` builds and publishes it automatically.

1. Push this project to a GitHub repository.
2. In **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
3. Push to `main`; the workflow publishes the static export. For a project repository, it configures the repository base path automatically. A `username.github.io` repository is published at the domain root.

### Vercel

Import the repository into Vercel and use the default Next.js build command (`npm run build`). The static export in `out/` is compatible with static hosting. If you later add server routes, server actions, or other runtime-only features, remove `output: "export"` from `next.config.ts` and deploy as a regular Next.js application on Vercel or another Node.js host.

## Accessibility and performance

The page uses semantic sections, keyboard focus styles, responsive layouts, reduced-motion handling, local persistence for language/theme, and no remote portrait or project images. There are no required environment variables.
