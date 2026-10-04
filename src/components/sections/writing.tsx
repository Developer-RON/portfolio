"use client";

import { BookOpen, Clock, ArrowUpRight, PenLine } from "lucide-react";
import Link from "next/link";
import { writing, writingStats } from "@/data/writing";
import { Container, SectionHeading } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

/**
 * Item 4 — technical writing.
 *
 * Communication is part of the job, so it gets first-class treatment rather than a
 * line in the resume. Each entry exposes the reader benefit and the takeaways,
 * which is the writing equivalent of a project's highlights.
 */
export function Writing() {
  return (
    <section id="writing" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Explaining the engineering, not just the outcome"
          description="Writing is how I find out whether I actually understand a decision. Each piece covers the trade-off, the failure mode, and what I would do differently."
        />

        <Reveal className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700/60 dark:text-slate-400">
            <PenLine size={13} /> {writingStats.pieces} pieces in progress
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700/60 dark:text-slate-400">
            <BookOpen size={13} /> {writingStats.includes}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700/60 dark:text-slate-400">
            <Clock size={13} /> Publishing {writingStats.cadence.toLowerCase()}
          </span>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {writing.map((piece) => (
            <Reveal key={piece.slug}>
              <article className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors duration-150 hover:border-slate-300 dark:border-slate-700/60 dark:bg-slate-900 dark:hover:border-slate-600 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{piece.kind}</Badge>
                  <span className="text-xs text-slate-400">{piece.readMinutes} min read</span>
                  {piece.status === "Placeholder" ? (
                    <Badge variant="outline">Drafting</Badge>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight">
                  {piece.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  For: {piece.audience}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {piece.summary}
                </p>
                <details className="group/details mt-4 rounded-lg border border-slate-200 p-3 text-sm dark:border-slate-700/60">
                  <summary className="cursor-pointer font-medium">What you&apos;ll take away</summary>
                  <ul className="mt-2 space-y-1.5 text-slate-600 dark:text-slate-400">
                    {piece.takeaways.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span aria-hidden className="text-blue-500">
                          →
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </details>
                {piece.url ? (
                  <Link
                    href={piece.url}
                    className="btn-lift mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400"
                  >
                    Read <ArrowUpRight size={14} />
                  </Link>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-6 max-w-4xl">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            Titles above are placeholders — they mark the writing I&apos;m shipping next, so you
            can see the topics I choose to explain.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}