"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/layout/theme-provider";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = siteConfig.nav.map((n) => n.href.replace("#", ""));

export function SiteHeader() {
  const { resolvedTheme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-150",
        scrolled
          ? "border-slate-200 bg-white/85 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/85"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="btn-lift font-mono text-sm font-bold tracking-tight"
          aria-label="Home"
        >
          <span className="text-blue-600 dark:text-blue-400">~/</span>
          {siteConfig.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          <span aria-hidden className="terminal-caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-blue-600/80 dark:bg-blue-400/80" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "link-underline rounded-md px-3 py-2 text-sm transition-colors duration-150",
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggle}
            className="btn-lift inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="btn-lift inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label="GitHub profile"
          >
            <Github size={16} />
          </a>
          <Link
            href="#contact"
            className="btn-lift inline-flex h-9 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-500"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-700/60 dark:bg-slate-900 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm transition-colors duration-150",
                    isActive
                      ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-lift mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

