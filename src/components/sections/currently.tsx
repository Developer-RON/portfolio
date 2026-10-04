"use client";

import { Compass, Target, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { currentlyLearning, lookingFor } from "@/data/capabilities";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

const stageStyles: Record<string, string> = {
  Deepening: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Building with": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Exploring: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

/**
 * Item 5 — Currently learning / Looking for.
 *
 * Recruiters default to "probably wants anything" when a junior candidate gives no
 * signal. Stating direction and what you want from a role pre-qualifies the fit and
 * signals self-awareness about the stage you're at.
 */
export function Currently() {
  return (
    <section
      id="currently"
      className="section-pad border-y border-slate-200 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-800/40"
    >
      <Container>
        <SectionHeading
          eyebrow="Currently"
          title="What I'm learning, and what I'm looking for"
          description="Direction beats a longer skills list. Here's where my attention is pointed right now, and what I'd want from a first team."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Learning */}
          <Reveal className="h-full">
            <div className="h-full rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-700/60 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Compass size={18} className="text-blue-600 dark:text-blue-400" />
                <h3 className="font-display font-semibold tracking-tight">Currently learning</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {currentlyLearning.map((item) => (
                  <li key={item.topic} className="border-l-2 border-slate-200 pl-4 dark:border-slate-700/60">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">{item.topic}</p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${stageStyles[item.stage]}`}
                      >
                        {item.stage}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Looking for */}
          <Reveal className="h-full" delay={0.06}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-700/60 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Target size={18} className="text-blue-600 dark:text-blue-400" />
                <h3 className="font-display font-semibold tracking-tight">Looking for</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {lookingFor.map((item) => (
                  <li key={item.title}>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm dark:bg-blue-950/40">
                <div className="flex items-start gap-2">
                  <MessageSquare size={15} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <p className="text-blue-900 dark:text-blue-200">
                    If your team matches that, I&apos;d like to talk.{" "}
                    <Link
                      href="#contact"
                      className="link-underline inline-flex items-center gap-1 font-semibold"
                    >
                      Send me a note <ArrowRight size={13} />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-6 max-w-5xl">
          <p className="flex items-center justify-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
            <BookOpen size={14} />
            I write up what I learn — see{" "}
            <Link href="#writing" className="link-underline font-medium text-blue-600 dark:text-blue-400">
              my writing
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}