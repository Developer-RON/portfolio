import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";

export function Resume() {
  return (
    <section
      id="resume"
      className="section-pad border-y border-slate-200 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-800/40"
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
                className="btn-lift inline-flex h-11 items-center gap-2 rounded-lg bg-slate-900 px-6 text-sm font-medium text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Download size={16} /> Download resume (PDF)
              </Link>
              <Link
                href="#contact"
                className="btn-lift inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-sm font-medium dark:border-slate-700 dark:bg-slate-900"
              >
                Request full background <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700/60 dark:bg-slate-900">
            <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-700/60">
              <FileText size={14} className="text-slate-500" />
              <span className="font-mono text-xs text-slate-500">resume.pdf — preview</span>
            </div>
            <div className="space-y-3 p-5 text-sm">
              <div>
                <p className="font-display font-semibold">Ronney Nelson</p>
                <p className="text-slate-500">Junior Software Developer</p>
              </div>
              <div className="border-t border-slate-100 pt-3 dark:border-slate-700/60">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Skills</p>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
                  TypeScript · React/Next.js · Node.js · PostgreSQL · Docker · Testing
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 dark:border-slate-700/60">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">Projects</p>
                <p className="mt-1 text-slate-600 dark:text-slate-400">
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
