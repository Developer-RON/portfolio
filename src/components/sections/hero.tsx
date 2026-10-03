"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to junior software engineering roles
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
            <span className="mt-2 block text-xl font-medium text-zinc-500 dark:text-zinc-400 sm:text-2xl">
              Junior Software Developer / Full-Stack Developer
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I build reliable, user-focused software that turns complex problems into simple
            experiences — with clean APIs, thoughtful data models, and tested, deployable code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-px hover:bg-blue-500 hover:shadow-md"
            >
              View My Projects <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 text-sm font-medium transition-all hover:-translate-y-px hover:border-zinc-300 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
            >
              <Github size={16} /> GitHub
            </a>
            <Link
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <Mail size={16} /> Let&apos;s Talk
            </Link>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
            {[
              ["Focus", "Full-stack web apps"],
              ["Strength", "APIs + databases"],
              ["Approach", "Ship, test, iterate"],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-400">{term}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white/80 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
            <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-zinc-500">engineer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300">
              <code>{codeSnippet}</code>
            </pre>
            <div className="flex items-center justify-between border-t border-zinc-200 px-4 py-3 font-mono text-xs text-zinc-500 dark:border-zinc-800">
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
