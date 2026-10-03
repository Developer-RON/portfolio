"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { GitBranch, ShieldCheck, Zap, Boxes } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";

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

const flow = [
  ["01", "Understand", "Scope the problem and define done."],
  ["02", "Build", "Small typed increments with reviews."],
  ["03", "Verify", "Unit + integration tests, manual QA."],
  ["04", "Ship", "Deploy, monitor, iterate on feedback."],
] as const;

function DeliveryFlow() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.45"],
  });

  return (
    <div className="relative mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700/60 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-5 py-3 font-mono text-xs text-slate-500 dark:border-slate-700/60">
        typical delivery flow
      </div>
      <ol ref={ref} className="relative grid gap-0 text-sm sm:grid-cols-4">
        {/* Connecting line draws as the section scrolls into view (transform only) */}
        <span
          aria-hidden
          className="absolute left-5 right-5 top-9 hidden h-px bg-slate-200 dark:bg-slate-700/60 sm:block"
        />
        {reduce ? null : (
          <motion.span
            aria-hidden
            className="absolute left-5 right-5 top-9 hidden h-px origin-left bg-blue-600 dark:bg-blue-400 sm:block"
            style={{ scaleX: scrollYProgress }}
          />
        )}
        {flow.map(([n, title, text]) => (
          <li
            key={n}
            className="relative border-slate-200 p-5 dark:border-slate-700/60 sm:border-l sm:first:border-l-0"
          >
            <span
              aria-hidden
              className="relative z-10 mb-3 hidden h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:bg-blue-400 dark:ring-blue-950 sm:block"
            />
            <p className="font-mono text-xs text-blue-600 dark:text-blue-400">{n}</p>
            <p className="mt-1 font-semibold">{title}</p>
            <p className="mt-1 min-h-[2.5rem] text-slate-600 dark:text-slate-400">{text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Engineering() {
  return (
    <section
      id="engineering"
      className="section-pad border-y border-slate-200 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-800/40"
    >
      <Container>
        <SectionHeading
          eyebrow="How I think"
          title="Engineering approach"
          description="How I approach building software on a team: small iterations, clear contracts, and decisions you can review."
        />
        <Reveal className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <Card key={p.title} className="h-full border-slate-200 p-5 dark:border-slate-700/60">
                <CardContent className="p-0">
                  <p.icon size={20} className="text-blue-600 dark:text-blue-400" />
                  <h3 className="mt-3 font-display font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 min-h-[3.75rem] text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <DeliveryFlow />
        </Reveal>
      </Container>
    </section>
  );
}

