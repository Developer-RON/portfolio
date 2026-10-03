"use client";

import { Database, Server, Cloud, TestTube2, LayoutTemplate, Sparkles, ArrowRight } from "lucide-react";
import { capabilities } from "@/data/capabilities";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

const icons = [LayoutTemplate, Server, Database, Sparkles, Cloud, TestTube2];

export function ValueProps() {
  return (
    <section id="capabilities" className="section-pad border-y border-slate-200 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-800/40">
      <Container>
        <SectionHeading
          eyebrow="What I bring"
          title="Capabilities, not percentages"
          description="The engineering work I can contribute to from day one — each backed by projects you can inspect below."
        />
        {/* Lighter, list-style treatment (not heavy cards) to contrast featured projects */}
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-700/60 dark:border-slate-700/60 dark:bg-slate-900">
            {capabilities.map((cap, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li
                  key={cap.title}
                  className="group flex flex-col gap-3 p-5 transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-slate-800/60 sm:flex-row sm:items-start sm:gap-5 sm:p-6"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-display font-semibold tracking-tight">{cap.title}</h3>
                      <span className="font-mono text-xs text-slate-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {cap.description}
                    </p>
                    <span className="tag-row mt-3 flex flex-wrap gap-1.5">
                      {cap.skills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="mt-1 hidden shrink-0 text-slate-300 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-blue-500 sm:block"
                  />
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

