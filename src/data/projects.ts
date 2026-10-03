export interface Project {
  slug: string;
  title: string;
  problem: string;
  summary: string;
  tech: string[];
  highlights: string[];
  challenges: { challenge: string; solution: string }[];
  githubUrl: string;
  demoUrl: string;
  caseStudyUrl?: string;
  featured: boolean;
  status: "In progress" | "Completed" | "Placeholder";
}

// Edit this file to add real projects — UI reads from here, no layout changes needed.
// Placeholders use [PROJECT NAME]-style tokens per credibility requirements.
export const projects: Project[] = [
  {
    slug: "fullstack-task-platform",
    title: "[PROJECT NAME] — Full-Stack Task Platform",
    problem: "Teams need a shared, reliable place to track work without losing context.",
    summary:
      "A full-stack task workspace with authentication, role-based access, REST API, Postgres persistence, and a responsive React UI.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    highlights: [
      "REST API with validation, pagination, and consistent error shapes",
      "JWT authentication with role-based authorization",
      "Database schema designed with indexes and relational integrity",
    ],
    challenges: [
      {
        challenge: "Preventing unauthorized access to other users' workspaces.",
        solution: "Scoped every query by authenticated user and workspace membership; added integration tests for access boundaries.",
      },
      {
        challenge: "Keeping list views fast as data grows.",
        solution: "Added server-side pagination, selective field queries, and indexes on foreign keys and timestamps.",
      },
    ],
    githubUrl: "https://github.com/Developer-RON/",
    demoUrl: "#projects",
    featured: true,
    status: "Placeholder",
  },
  {
    slug: "api-service-starter",
    title: "[PROJECT NAME] — Backend API Service",
    problem: "Frontend teams need a well-documented, testable API contract they can trust.",
    summary:
      "A backend service exposing versioned REST endpoints with OpenAPI docs, automated tests, rate limiting, and structured logging.",
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Vitest", "Docker"],
    highlights: [
      "OpenAPI documentation generated from route schemas",
      "Request validation and centralized error handling middleware",
      "Automated unit and integration tests in CI",
    ],
    challenges: [
      {
        challenge: "Inconsistent error responses confused API consumers.",
        solution: "Introduced a single error-handling middleware returning RFC-style problem details with codes.",
      },
    ],
    githubUrl: "https://github.com/Developer-RON/",
    demoUrl: "#projects",
    featured: true,
    status: "Placeholder",
  },
  {
    slug: "realtime-collaboration-notes",
    title: "[PROJECT NAME] — Realtime Notes",
    problem: "Collaborators editing the same notes overwrite each other's changes.",
    summary:
      "Realtime collaborative notes with presence indicators, optimistic updates, and conflict-safe sync over WebSockets.",
    tech: ["React", "TypeScript", "WebSockets", "Redis", "PostgreSQL"],
    highlights: [
      "Optimistic UI with rollback on sync failure",
      "Presence tracking and live cursors metadata",
      "Debounced persistence to reduce write load",
    ],
    challenges: [
      {
        challenge: "Handling reconnects without data loss.",
        solution: "Queued local mutations and replayed them in order on reconnect with server acknowledgements.",
      },
    ],
    githubUrl: "https://github.com/Developer-RON/",
    demoUrl: "#projects",
    featured: true,
    status: "Placeholder",
  },
  {
    slug: "ai-assisted-support-inbox",
    title: "[PROJECT NAME] — AI-Assisted Support Inbox",
    problem: "Support teams spend too long triaging repetitive incoming requests.",
    summary:
      "A support inbox prototype that classifies incoming messages with an LLM API, suggests replies, and keeps humans in the loop.",
    tech: ["Next.js", "TypeScript", "LLM API", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Server-side LLM calls — no API keys exposed to the browser",
      "Human review step before any automated reply is sent",
      "Prompt templates stored as versioned configuration",
    ],
    challenges: [
      {
        challenge: "Avoiding leaking secrets and uncontrolled API costs.",
        solution: "Moved all AI calls server-side with input limits, caching, and explicit user-triggered actions.",
      },
    ],
    githubUrl: "https://github.com/Developer-RON/",
    demoUrl: "#projects",
    featured: true,
    status: "Placeholder",
  },
];
