import { CircleDot } from "lucide-react";
import { projects } from "@/data/projects";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";

const ongoing = projects.filter((p) => p.status === "in-progress");

/** Progress detail that only makes sense for unfinished work. */
function ProgressPanel({ project }: { project: (typeof projects)[number] }) {
  if (!project.doneSoFar?.length && !project.nextUp?.length) return null;

  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {project.doneSoFar?.length ? (
        <div className="rounded-lg border border-green-200 bg-green-50/60 p-3 dark:border-green-900/50 dark:bg-green-950/20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-green-700 dark:text-green-400">
            Shipped so far
          </p>
          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            {project.doneSoFar.map((d) => (
              <li key={d} className="flex gap-2">
                <span aria-hidden className="text-green-600 dark:text-green-400">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {project.nextUp?.length ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3 dark:border-amber-900/50 dark:bg-amber-950/20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Still to come
          </p>
          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            {project.nextUp.map((n) => (
              <li key={n} className="flex gap-2">
                <span aria-hidden className="text-amber-600 dark:text-amber-400">○</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

/**
 * Unfinished work, shown honestly rather than padded into "featured".
 * The done/next split is the point: it demonstrates real progress and real
 * scoping instead of implying the whole thing is finished.
 */
export function OngoingProjects() {
  return (
    <section
      id="ongoing"
      className="section-pad border-y border-slate-200 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-800/40"
    >
      <Container>
        <SectionHeading
          eyebrow="In progress"
          title="Ongoing projects"
          description="Work in flight. I list what's actually done and what's left, so you can judge the process — not just the finished result."
        />

        {ongoing.length > 0 ? (
          <div className="mx-auto mt-12 grid max-w-5xl gap-8">
            {ongoing.map((project) => (
              <div key={project.slug}>
                <ProjectCard project={project} />
                <div className="px-1">
                  <ProgressPanel project={project} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-2xl">
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700/60">
              <CircleDot size={24} className="mx-auto text-slate-300 dark:text-slate-600" />
              <p className="mt-3 font-medium">Nothing in flight right now</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                I&apos;m between projects. Everything finished is listed above.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}