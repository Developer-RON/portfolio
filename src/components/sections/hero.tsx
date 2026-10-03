"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

const codeSnippet = `// what I focus on
type Engineer = {
  craft: "reliable software";
  approach: "evidence over claims";
  stack: ["TypeScript", "React", "Node", "SQL"];
};

async function ship(value: string): Promise<void> {
  await design(value);
  await build(value);
  await test(value);
  await deploy(value);
}`;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.01 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay, ease: "easeOut" as const },
        };

  return (
    <section id="home" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div {...rise(0)}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to junior software engineering roles
          </p>
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400">~/ronney-nelson</p>
          <h1 className="mt-2 font-display text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.02] tracking-tight">
            Ronney Nelson
          </h1>
          <p className="mt-3 font-display text-xl font-semibold tracking-tight text-slate-500 dark:text-slate-300 sm:text-2xl">
            Junior Software Developer
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I build reliable, user-focused software that turns complex problems into simple
            experiences — with clean APIs, thoughtful data models, and tested, deployable code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="btn-lift inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-500 hover:shadow-md"
            >
              View My Projects <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-sm font-medium hover:border-slate-300 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <Github size={16} /> GitHub
            </a>
            <Link
              href="#contact"
              className="link-underline inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Mail size={16} /> Let&apos;s Talk
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm dark:border-slate-700/60">
            {[
              ["Focus", "Full-stack web apps"],
              ["Strength", "APIs + databases"],
              ["Approach", "Ship, test, iterate"],
            ].map(([term, value]) => (
              <div key={term} className="min-h-[3.5rem]">
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-400">{term}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div {...rise(0.12)} className="hidden lg:block">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-800/80">
            <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-700/60">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-slate-500">engineer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
              <code>{codeSnippet}</code>
              <span aria-hidden className="terminal-caret ml-1 inline-block h-4 w-2 translate-y-[3px] bg-blue-500/80" />
            </pre>
            <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 font-mono text-xs text-slate-500 dark:border-slate-700/60">
              <span>
                <span className="text-green-500">●</span> build passing
              </span>
              <span>tests: 42 passed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

