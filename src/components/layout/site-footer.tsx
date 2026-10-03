import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const hasLinkedIn = Boolean(siteConfig.links.linkedin);
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-sm font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Junior Software Developer — building reliable, user-focused software.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <Github size={16} />
          </a>
          {hasLinkedIn ? (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
            >
              <Linkedin size={16} />
            </a>
          ) : null}
          <a
            href={`mailto:${siteConfig.links.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
