# Portfolio — Junior Software Developer

A premium, minimal developer portfolio built with **Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content without touching UI

- `src/config/site.ts` — name, title, links, navigation
- `src/data/projects.ts` — add/edit projects (title, problem, tech, highlights, challenges, links)
- `src/data/capabilities.ts` — capability cards and journey timeline
- `public/resume.pdf` — drop your real resume PDF here (linked from Resume section)

Placeholders like `[YOUR NAME]`, `[YOUR EMAIL]`, `[YOUR GITHUB]` mark spots to personalize.
No fake employment, metrics, or testimonials are included by design.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

## Deploy

Optimized for Vercel. Set `SITE_URL` (server-only, no `NEXT_PUBLIC_` prefix) to your production domain.
