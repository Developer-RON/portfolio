"use client";
import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const n: Record<string, string> = {};
    if (form.name.trim().length < 2) n.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) n.email = "Enter a valid email.";
    if (form.message.trim().length < 10) n.message = "Add more detail (10+ chars).";
    setErrors(n);
    return Object.keys(n).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const s = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const b = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:${siteConfig.links.email}?subject=${s}&body=${b}`;
    setSent(true);
  }

  const inputCls = "h-10 w-full rounded-lg border border-zinc-200 bg-transparent px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700";

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let's talk" description="Email is fastest. I reply within a couple of days." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <a href={`mailto:${siteConfig.links.email}`} className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 hover:shadow-md dark:border-zinc-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Mail size={18} /></span>
              <span><span className="block text-sm font-medium">Email</span><span className="block text-sm text-zinc-500">{siteConfig.links.email}</span></span>
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 hover:shadow-md dark:border-zinc-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Github size={18} /></span>
              <span><span className="block text-sm font-medium">GitHub</span><span className="block text-sm text-zinc-500">View code</span></span>
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 hover:shadow-md dark:border-zinc-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Linkedin size={18} /></span>
              <span><span className="block text-sm font-medium">LinkedIn</span><span className="block text-sm text-zinc-500">Connect</span></span>
            </a>
          </div>
          <form onSubmit={onSubmit} noValidate className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {sent ? (
              <div className="py-10 text-center">
                <p className="font-semibold">Opening your email client…</p>
                <button type="button" onClick={() => setSent(false)} className="mt-3 text-sm text-blue-600 hover:underline">Send another</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium">Name</label>
                  <input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className={inputCls} />
                  {errors.name ? <p role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium">Email</label>
                  <input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className={inputCls} />
                  {errors.email ? <p role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea id="c-msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Hi - let's talk…" rows={5} className="w-full resize-y rounded-lg border border-zinc-200 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700" />
                  {errors.message ? <p role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p> : null}
                </div>
                <button type="submit" className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-500"><Send size={15} /> Send message</button>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
