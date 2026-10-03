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
