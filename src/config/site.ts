/**
 * Hero proof points — concrete and verifiable, never percentage bars.
 * Each claim is backed by something a reviewer can open (repo, test, deployment).
 */
export const heroProof = [
  {
    label: "Ships",
    value: "Deployed, not just demoed",
    detail: "Every project runs somewhere you can click.",
  },
  {
    label: "Verifies",
    value: "Unit + integration + E2E",
    detail: "Vitest and Playwright wired into CI.",
  },
  {
    label: "Documents",
    value: "OpenAPI + written rationale",
    detail: "Decisions explained, not just shipped.",
  },
] as const;

export const siteConfig = {
  name: "Ronney Nelson",
  title: "Ronney Nelson | Junior Software Developer",
  description:
    "Junior full-stack software developer building reliable, user-focused web applications with modern TypeScript, React, Node.js, databases, and cloud services.",
  links: {
    github: "https://github.com/Developer-RON/",
    // Add your real LinkedIn profile URL here when ready, e.g.
    // "https://www.linkedin.com/in/your-handle/"
    linkedin: "",
    email: "ronneynelsonofficial@gmail.com",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Ongoing", href: "#ongoing" },
    { label: "Engineering", href: "#engineering" },
    { label: "Writing", href: "#writing" },
    { label: "Currently", href: "#currently" },
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
};
