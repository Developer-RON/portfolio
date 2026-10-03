"use client";

import { motion } from "framer-motion";
import { GitBranch, ShieldCheck, Zap, Boxes } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    icon: GitBranch,
    title: "Evidence over claims",
    text: "Every capability links to code, tests, or a deployment — not a percentage bar.",
  },
  {
    icon: ShieldCheck,
    title: "Security by default",
    text: "Auth checks on every boundary, validated input, secrets kept server-side.",
  },
  {
    icon: Zap,
    title: "Performance with intent",
    text: "Paginate, index, and measure before optimizing. Fast by design, not accident.",
  },
  {
    icon: Boxes,
    title: "Maintainable structure",
    text: "Small reusable components, typed contracts, and data separated from UI.",
  },
];

export function Engineering() {
  return (
    <section
      id="engineering"
      className="border-y border-zinc-200 bg-zinc-50/60 py-16 dark:border-zinc-800 dark:bg-zinc-900/40 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="How I think"
          title="Engineering approach"
          description="How I approach building software on a team: small iterations, clear contracts, and decisions you can review."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Card className="h-full p-5">
                <CardContent className="p-0">
                  <p.icon size={20} className="text-blue-600 dark:text-blue-400" />
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 px-5 py-3 font-mono text-xs text-zinc-500 dark:border-zinc-800">
            typical delivery flow
          </div>
          <ol className="grid gap-0 text-sm sm:grid-cols-4">
            {[
              ["01", "Understand", "Scope the problem and define done."],
              ["02", "Build", "Small typed increments with reviews."],
              ["03", "Verify", "Unit + integration tests, manual QA."],
              ["04", "Ship", "Deploy, monitor, iterate on feedback."],
            ].map(([n, title, text], idx) => (
              <li
                key={n}
                className="border-zinc-200 p-5 dark:border-zinc-800 sm:border-l sm:first:border-l-0"
              >
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400">{n}</p>
                <p className="mt-1 font-semibold">{title}</p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
