import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const hasLinkedIn = Boolean(siteConfig.links.linkedin);
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-700/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-sm font-semibold">
            <span className="text-blue-600 dark:text-blue-400">~/</span>
            {siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Junior Software Developer — building reliable, user-focused software.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="btn-lift inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-100 dark:border-slate-700/60 dark:hover:bg-slate-800"
          >
            <Github size={16} />
          </a>
          {hasLinkedIn ? (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn-lift inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-100 dark:border-slate-700/60 dark:hover:bg-slate-800"
            >
              <Linkedin size={16} />
            </a>
          ) : null}
          <a
            href={`mailto:${siteConfig.links.email}`}
            aria-label="Email"
            className="btn-lift inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-100 dark:border-slate-700/60 dark:hover:bg-slate-800"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
