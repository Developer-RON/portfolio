import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? project.title : "Project" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white">
          <ArrowLeft size={15} /> Back to projects
        </Link>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Case study</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{project.problem}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-medium dark:border-slate-700">
            <Github size={15} /> Repository
          </a>
          <a href={project.demoUrl} className="inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white">
            Live demo <ExternalLink size={15} />
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-700/60">
            <h2 className="font-semibold">What was built</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>
            <h3 className="mt-5 font-semibold">Technical highlights</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2"><span aria-hidden className="text-blue-500">→</span><span>{h}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-700/60">
            <h2 className="font-semibold">Challenges & solutions</h2>
            <div className="mt-2 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              {project.challenges.map((c) => (
                <div key={c.challenge}>
                  <p><strong className="text-slate-900 dark:text-slate-100">Challenge: </strong>{c.challenge}</p>
                  <p className="mt-1"><strong className="text-slate-900 dark:text-slate-100">Solution: </strong>{c.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
