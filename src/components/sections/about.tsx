import { Container, SectionHeading } from "@/components/ui/section";
import { timeline } from "@/data/capabilities";
import { GraduationCap, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-pad">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About"
              title="A junior developer focused on fundamentals"
              description="I enjoy turning ambiguous problems into working software. My strengths are learning quickly, communicating clearly, and writing code teammates can maintain."
            />
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700/60">
                <MapPin size={14} /> Open to remote & on-site
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700/60">
                <GraduationCap size={14} /> Continuous learner
              </span>
            </div>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600 dark:border-slate-700/60 dark:bg-slate-800 dark:text-slate-400">
              <p>
                I&apos;m early in my career and deliberate about it: I study system design, write
                tests, use Git carefully, and deploy real projects. I&apos;d rather show a small,
                well-built application than list a dozen buzzwords.
              </p>
              <p className="mt-3">
                Currently I&apos;m deepening my skills in TypeScript, Next.js, Node.js APIs,
                PostgreSQL, and cloud deployments — and learning how professional teams review,
                test, and ship code.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Journey
            </h3>
            <ol className="mt-4 space-y-0 border-l border-slate-200 dark:border-slate-700/60">
              {timeline.map((item) => (
                <li key={item.title} className="relative pb-8 pl-6 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-950"
                  />
                  <p className="font-mono text-xs text-slate-500">{item.period}</p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="mt-1 min-h-[2.5rem] text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Languages", "TypeScript, JavaScript, SQL, HTML/CSS"],
                ["Frontend", "React, Next.js, Tailwind CSS"],
                ["Backend", "Node.js, Express, REST, JWT"],
                ["Data & Ops", "PostgreSQL, Prisma, Redis, Docker"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700/60"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
