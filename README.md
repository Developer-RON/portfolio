# Portfolio — Ronney Nelson

A premium, minimal developer portfolio built with **Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content without touching UI

- `src/config/site.ts` — name, title, links, navigation, and the hero proof points (`heroProof`)
- `src/data/projects.ts` — add/edit projects. `status` ("completed" | "in-progress")
  decides which section a project appears in; `isPlaceholder` independently flags
  it as an unreplaced stub
- `src/data/capabilities.ts` — capability groups, journey timeline, and the
  **Currently learning** / **Looking for** content
- `src/data/writing.ts` — technical writing entries (title, audience, summary, takeaways, read time)
- `public/resume.pdf` — drop your real resume PDF here (linked from Resume section)

### Page sections

`Hero → Capabilities → Shipped → Ongoing → Engineering → Writing → Currently → About → Resume → Contact`

Projects are split into **Shipped** and **Ongoing** rather than one "featured" list.
Proof precedes process: a recruiter sees finished, inspectable work first. Ongoing
projects render a "Shipped so far" / "Still to come" split so unfinished work reads
as real progress instead of a hidden weakness. Flip a project's `status` in
`src/data/projects.ts` and it moves between sections automatically.

Both sections render an honest empty state rather than a blank heading, so a
portfolio with nothing finished yet still looks intentional.

Four of these exist to answer what a recruiter can't infer from a repo alone:

| Section | Why it's there |
|---|---|
| **Hero** | Outcome-first value prop plus verifiable proof points, not adjectives |
| **Engineering** | Principles *and* the trade-offs behind them — shows reasoning, not slogans |
| **Writing** | Technical depth and communication; each post lists reader takeaways |
| **Currently** | Direction (what I'm learning) and career intent (what I'm looking for) |

### Placeholder content

Anything marked `[BRACKETED]` or with a `Placeholder` / `Drafting` badge is a
placeholder — replace it as you publish real work. Project placeholders follow the
same convention in `src/data/projects.ts`. No skill percentages are shown anywhere
by design: a self-assessed number isn't verifiable, so link to the repo instead.

Contact form sends directly to `ronneynelsonofficial@gmail.com` via FormSubmit
AJAX (no backend/keys needed). First submission triggers a one-time
activation email to that inbox — click Activate once, then all messages
arrive automatically.

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
