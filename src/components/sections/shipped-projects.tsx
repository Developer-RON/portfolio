import { CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/sections/project-card";

const shipped = projects.filter((p) => p.status === "completed");

/**
 * Proven work first. Splitting this out means a recruiter sees finished,
 * inspectable projects before anything unfinished — which is why it leads.
 */
export function ShippedProjects() {
  return (
    <section id="projects" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Shipped"
          title="Completed projects"
          description="Finished, deployed, and written up. Each one covers the problem, the architecture, and the trade-offs I made along the way."
        />

        {shipped.length > 0 ? (
          <div className="mx-auto mt-12 grid max-w-5xl gap-8">
            {shipped.map((project, i) => (
              <ProjectCard key={project.slug} project={project} lead={i === 0} />
            ))}
          </div>
        ) : (
          // Empty state: a portfolio with nothing finished yet should say so
          // rather than render an empty heading.
          <Reveal className="mx-auto mt-10 max-w-2xl">
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700/60">
              <CheckCircle2
                size={24}
                className="mx-auto text-slate-300 dark:text-slate-600"
              />
              <p className="mt-3 font-medium">Nothing shipped yet</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                My first completed project is still in the works. Everything currently
                underway is listed below.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}