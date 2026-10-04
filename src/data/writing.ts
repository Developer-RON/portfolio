export interface WritingPiece {
  slug: string;
  title: string;
  kind: "Deep dive" | "Explainer" | "Case study" | "Learning log";
  audience: string;
  summary: string;
  takeaways: string[];
  readMinutes: number;
  status: "Published" | "Draft" | "Placeholder";
  url?: string;
}

/**
 * Item 4 — technical writing.
 *
 * Writing is the cheapest proof of engineering depth: it forces you to explain
 * a trade-off, not just ship it. Titles marked [BRACKETED] are placeholders —
 * replace them with real posts. Each entry links back to the repo when possible
 * so a reviewer can verify the claim rather than take it on trust.
 */
export const writing: WritingPiece[] = [
  {
    slug: "why-your-api-needs-one-error-shape",
    title: "[POST TITLE] Why Your API Needs Exactly One Error Shape",
    kind: "Deep dive",
    audience: "Frontend devs consuming an API they don't control",
    summary:
      "Why inconsistent error responses quietly slow down every consumer, and how a single problem-details middleware buys you predictable client code.",
    takeaways: [
      "How inconsistent error shapes cause client-side branching",
      "One middleware, one error contract, zero per-endpoint decisions",
      "What to put in the response body so clients never guess",
    ],
    readMinutes: 7,
    status: "Placeholder",
  },
  {
    slug: "authorization-is-not-authentication",
    title: "[POST TITLE] Authorization Is Not Authentication (And the Bug That Proves It)",
    kind: "Explainer",
    audience: "Anyone adding auth to their first real app",
    summary:
      "Logging a user in proves nothing about what they may touch. A walkthrough of the access-boundary bug I hit and the scoping pattern that closed it.",
    takeaways: [
      "Authentication answers who; authorization answers what — they are separate checks",
      "Scope every query by ownership instead of checking access in the UI",
      "How to write an integration test that fails when the boundary leaks",
    ],
    readMinutes: 6,
    status: "Placeholder",
  },
  {
    slug: "designing-a-schema-for-realtime-collaboration",
    title: "[POST TITLE] Designing a Schema That Survives Realtime Collaboration",
    kind: "Case study",
    audience: "Developers building collaborative or sync-heavy features",
    summary:
      "The modelling decisions behind my realtime notes project — conflict strategy, debounced writes, and what I would change with another week.",
    takeaways: [
      "Choosing a conflict strategy before writing any sync code",
      "Why debounced writes beat per-keystroke persistence",
      "The trade-off I made under time pressure, stated plainly",
    ],
    readMinutes: 9,
    status: "Placeholder",
  },
  {
    slug: "keeping-llm-api-keys-and-costs-on-the-server",
    title: "[POST TITLE] Keeping LLM Keys and Costs on the Server",
    kind: "Deep dive",
    audience: "Developers shipping their first AI feature",
    summary:
      "Client-side LLM calls leak your keys and your budget. The server-side pattern I used, plus the input limits and caching that keep costs predictable.",
    takeaways: [
      "Why a secret in a browser bundle is a public secret",
      "Keeping a human in the loop before anything auto-sends",
      "Input limits, caching, and explicit user-triggered calls",
    ],
    readMinutes: 8,
    status: "Placeholder",
  },
  {
    slug: "notes-on-reading-code-like-a-reviewer",
    title: "[POST TITLE] Reading Code Like a Reviewer",
    kind: "Learning log",
    audience: "Junior developers on their first team",
    summary:
      "What changed when I started reading code for intent and trade-offs instead of for the answer. Notes on learning from repositories I did not write.",
    takeaways: [
      "Reading for the decision behind the code",
      "Questions I ask before changing anything I did not write",
      "Why writing the PR explanation is the part that teaches you most",
    ],
    readMinutes: 5,
    status: "Placeholder",
  },
];

/** Small supporting detail for the writing section header. */
export const writingStats = {
  pieces: writing.length,
  cadence: "Monthly",
  includes: "Trade-offs, failure modes, and code you can run",
};