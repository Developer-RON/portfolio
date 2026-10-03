"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container, SectionHeading } from "@/components/ui/section";
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that show how I build"
          description="Each project includes the problem, the architecture, and the engineering trade-offs — not just screenshots. Replace placeholders with real repos as you ship."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8">
          {featured.map((project, i) => (
            <Reveal key={project.slug}>
              <SpotlightCard
                className={`group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-900 ${i === 0 ? "md:grid md:grid-cols-[1.05fr_1fr]" : ""}`}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 ${i === 0 ? "h-52 md:h-full md:min-h-[320px]" : "h-48"}`}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-800/90">
                      <div className="mb-2 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                      </div>
                      <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {project.slug}
                      </p>
                      <p className="mt-1 min-h-[2.5rem] text-sm font-medium">{project.problem}</p>
                    </div>
                  </div>
                  <span className="absolute right-3 top-3">
                    <Badge variant="secondary">{project.status}</Badge>
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
                      <summary className="cursor-pointer font-medium">
                        Engineering challenge & solution
                      </summary>
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
            ))}
        </div>
      </Container>
    </section>
  );
}
