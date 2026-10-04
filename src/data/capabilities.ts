export interface Capability {
  title: string;
  description: string;
  skills: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Full-Stack Development",
    description: "Complete web apps from UI to API with clean, maintainable structure.",
    skills: ["React / Next.js", "TypeScript", "REST APIs"],
  },
  {
    title: "Backend & APIs",
    description: "Versioned endpoints with validation, auth, and predictable errors.",
    skills: ["Node.js", "Express", "Auth (JWT)"],
  },
  {
    title: "Databases",
    description: "Relational modeling with integrity, indexes, and safe migrations.",
    skills: ["PostgreSQL", "Prisma", "Redis"],
  },
  {
    title: "AI Integration",
    description: "Practical LLM features with server-side calls and human review.",
    skills: ["LLM APIs", "Prompt design", "Caching"],
  },
  {
    title: "Cloud & DevOps",
    description: "Containerized deploys with CI checks and environment config.",
    skills: ["Docker", "GitHub Actions", "Vercel"],
  },
  {
    title: "Testing & Design",
    description: "Unit, integration, and E2E coverage plus system-design thinking.",
    skills: ["Vitest", "Playwright", "System design"],
  },
];

export interface FocusItem {
  topic: string;
  detail: string;
  stage: "Deepening" | "Building with" | "Exploring";
}

export interface LookingForItem {
  title: string;
  detail: string;
}

/** Item 5 — signals direction. Edit freely; the section reads from here. */
export const currentlyLearning: FocusItem[] = [
  {
    topic: "System design & data modelling",
    detail:
      "Normalising schemas, choosing indexes, and reasoning about trade-offs before writing queries.",
    stage: "Deepening",
  },
  {
    topic: "TypeScript at the boundaries",
    detail:
      "Runtime validation with Zod, discriminated unions, and typed contracts shared between client and API.",
    stage: "Building with",
  },
  {
    topic: "Accessibility & frontend performance",
    detail:
      "Keyboard and screen-reader behaviour, plus profiling render cost in React Server Components.",
    stage: "Exploring",
  },
  {
    topic: "Team workflows",
    detail:
      "Code review culture, CI gates, and how teams agree on trade-offs before shipping.",
    stage: "Deepening",
  },
];

/** Item 5 — career intent. Keeps recruiters from having to guess what you want. */
export const lookingFor: LookingForItem[] = [
  {
    title: "A team that ships real software",
    detail:
      "Product work with real users and real constraints, not exercises — somewhere I can own a feature end to end.",
  },
  {
    title: "Code review I can learn from",
    detail:
      "Reviewers who explain why, not just what. I fix the issue and the class of issue behind it.",
  },
  {
    title: "Mentorship with a track record",
    detail:
      "Someone who has shipped production systems and will spend time on my fundamentals.",
  },
  {
    title: "Async, written communication",
    detail:
      "PRs and design notes that explain the reasoning — I write to be reviewed, not to look busy.",
  },
];

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    period: "Now",
    title: "Building production-style projects",
    description: "Full-stack apps with auth, databases, tests, and deployments.",
  },
  {
    period: "Foundations",
    title: "CS fundamentals & web platform",
    description: "Data structures, HTTP, SQL, Git, and accessible UI basics.",
  },
  {
    period: "Next",
    title: "Open to junior engineering roles",
    description: "Looking for a team where I can ship, learn, and contribute.",
  },
];
