import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";

export function Resume() {
  return (
    <section
      id="resume"
      className="border-y border-zinc-200 bg-zinc-50/60 py-16 dark:border-zinc-800 dark:bg-zinc-900/40 sm:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Resume"
              title="A one-page summary for busy reviewers"
              description="A concise PDF covering skills, projects, and education. Designed to be scanned in 30 seconds and to point back to live code."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/resume.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-all hover:-translate-y-px hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <Download size={16} /> Download resume (PDF)
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 text-sm font-medium transition-all hover:-translate-y-px dark:border-zinc-700 dark:bg-zinc-900"
              >
                Request full background <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <FileText size={14} className="text-zinc-500" />
              <span className="font-mono text-xs text-zinc-500">resume.pdf — preview</span>
            </div>
            <div className="space-y-3 p-5 text-sm">
              <div>
                <p className="font-semibold">[YOUR NAME]</p>
                <p className="text-zinc-500">Junior Software Developer</p>
              </div>
              <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">Skills</p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  TypeScript · React/Next.js · Node.js · PostgreSQL · Docker · Testing
                </p>
              </div>
              <div className="border-t border-zinc-100 pt-3 dark:border-zinc-800">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">Projects</p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  4 featured builds — see Projects section for code & demos.
                </p>
              </div>
              <p className="rounded-md bg-blue-50 p-3 text-xs text-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
                Add your real resume PDF at <code>public/resume.pdf</code> — this preview updates
                automatically.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
