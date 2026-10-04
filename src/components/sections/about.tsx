import { Container, SectionHeading } from "@/components/ui/section";
import { timeline, capabilities } from "@/data/capabilities";
import { GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";

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
                Day to day I write code, read a lot of other people&apos;s code, and write down
                what I learn. What I&apos;m focused on right now is in{" "}
                <Link
                  href="#currently"
                  className="link-underline font-medium text-blue-600 dark:text-blue-400"
                >
                  Currently learning
                </Link>
                .
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
            {/*
              Item 3 — capability groups, not a flat skill list.
              A generic comma-separated grid ("Languages: TS, JS, SQL, HTML/CSS")
              reads as keyword stuffing and proves nothing. Grouping by capability
              shows what you can actually DO and where the tools sit in it.
              Single source of truth remains src/data/capabilities.ts.
            */}
            <div className="mt-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Capability groups
                </h3>
                <Link
                  href="#capabilities"
                  className="link-underline text-xs font-medium text-blue-600 dark:text-blue-400"
                >
                  Full breakdown
                </Link>
              </div>
              <ul className="mt-4 space-y-3">
                {capabilities.slice(0, 4).map((cap) => (
                  <li
                    key={cap.title}
                    className="flex flex-col gap-1.5 rounded-lg border border-slate-200 p-4 dark:border-slate-700/60"
                  >
                    <p className="font-medium">{cap.title}</p>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {cap.description}
                    </p>
                    <div className="tag-row mt-1 flex flex-wrap gap-1.5">
                      {cap.skills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                No skill percentages — a number I invented would tell you nothing you can
                verify.{" "}
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Check the repo instead.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
