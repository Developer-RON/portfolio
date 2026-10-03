"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that show how I build"
          description="Each project includes the problem, the architecture, and the engineering trade-offs — not just screenshots. Replace placeholders with real repos as you ship."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 via-zinc-50 to-zinc-100 dark:from-blue-950/40 dark:via-zinc-900 dark:to-zinc-900">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-800/90">
                        <div className="mb-2 flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                          <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                          <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        </div>
                        <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                          {project.slug}
                        </p>
                        <p className="mt-1 text-sm font-medium">{project.problem}</p>
                      </div>
                    </div>
                    <span className="absolute right-3 top-3">
                      <Badge variant="secondary">{project.status}</Badge>
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2">
                          <span aria-hidden className="text-blue-500">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <details className="group/details mt-4 rounded-lg border border-zinc-200 p-3 text-sm dark:border-zinc-800">
                      <summary className="cursor-pointer font-medium">
                        Engineering challenge & solution
                      </summary>
                      <div className="mt-2 space-y-2 text-zinc-600 dark:text-zinc-400">
                        {project.challenges.map((c) => (
                          <div key={c.challenge}>
                            <p><strong className="text-zinc-900 dark:text-zinc-200">Challenge:</strong> {c.challenge}</p>
                            <p><strong className="text-zinc-900 dark:text-zinc-200">Solution:</strong> {c.solution}</p>
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
                      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-zinc-200 px-3 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                      <Github size={14} /> Code
                    </a>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex h-9 items-center gap-1 rounded-md bg-zinc-900 px-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                      Case study <ArrowUpRight size={14} />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
        </div>
      </Container>
    </section>
  );
}
