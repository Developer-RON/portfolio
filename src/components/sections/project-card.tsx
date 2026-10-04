"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

/**
 * Shared project card used by both the "Shipped" and "In progress" sections.
 * `lead` widens the first card into two columns to break up the list rhythm.
 */
export function ProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
  return (
    <Reveal>
      <SpotlightCard
        className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-900 ${lead ? "md:grid md:grid-cols-[1.05fr_1fr]" : ""}`}
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 ${lead ? "h-52 md:h-full md:min-h-[320px]" : "h-48"}`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-800/90">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
              </div>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{project.slug}</p>
              <p className="mt-1 min-h-[2.5rem] text-sm font-medium">{project.problem}</p>
            </div>
          </div>
          <span className="absolute right-3 top-3 flex gap-1.5">
            {project.isPlaceholder ? (
              <Badge variant="outline">Placeholder</Badge>
            ) : null}
            <Badge variant="secondary">
              {project.status === "completed" ? "Shipped" : "In progress"}
            </Badge>
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          <CardHeader>
            <CardTitle className="font-display transition-colors duration-150 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {project.title}
            </CardTitle>
            <CardDescription>{project.summary}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="tag-row flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
            <ul className="mt-4 min-h-[4.5rem] space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              {project.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span aria-hidden className="text-blue-500">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <details className="group/details mt-4 rounded-lg border border-slate-200 p-3 text-sm dark:border-slate-700/60">
              <summary className="cursor-pointer font-medium">Engineering challenge & solution</summary>
              <div className="mt-2 space-y-2 text-slate-600 dark:text-slate-400">
                {project.challenges.map((c) => (
                  <div key={c.challenge}>
                    <p><strong className="text-slate-900 dark:text-slate-200">Challenge:</strong> {c.challenge}</p>
                    <p><strong className="text-slate-900 dark:text-slate-200">Solution:</strong> {c.solution}</p>
                  </div>
                ))}
              </div>
            </details>
          </CardContent>
          <CardFooter className="gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex h-9 items-center gap-1.5 rounded-md border border-slate-200 px-3 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Github size={14} /> Code
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="btn-lift inline-flex h-9 items-center gap-1 rounded-md bg-slate-900 px-3 text-sm font-medium text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Case study <ArrowUpRight size={14} />
            </Link>
          </CardFooter>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}
