"use client";
import { useState } from "react";
import { Send, Github, Linkedin, Mail, CheckCircle2, AlertTriangle, Copy, Loader2 } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [copied, setCopied] = useState(false);

  const hasLinkedIn = Boolean(siteConfig.links.linkedin);
  const contactEmail = siteConfig.links.email;

  function validate() {
    const n: Record<string, string> = {};
    if (form.name.trim().length < 2) n.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) n.email = "Enter a valid email.";
    if (form.message.trim().length < 10) n.message = "Add more detail (10+ chars).";
    setErrors(n);
    return Object.keys(n).length === 0;
  }

  function openMailClient() {
    const s = encodeURIComponent(`Portfolio inquiry from ${form.name || "your site"}`);
    const b = encodeURIComponent(`${form.message || "Hi Ronney —"}\n\n- ${form.name || "Name"} (${form.email || "email"})`);
    window.location.href = `mailto:${contactEmail}?subject=${s}&body=${b}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      openMailClient();
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio inquiry from ${form.name.trim()}`,
          _template: "table",
          _replyto: form.email.trim(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setServerError("Couldn't send just now. Your message is safe — try the email button instead.");
      setStatus("error");
    }
  }

  const inputCls = "h-10 w-full rounded-lg border border-zinc-200 bg-transparent px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700";

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let's talk" description="Email is fastest. I reply within a couple of days." />
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Mail size={18} /></span>
              <span className="min-w-0 flex-1"><span className="block text-sm font-medium">Email</span><span className="block truncate text-sm text-zinc-500">{contactEmail}</span></span>
              <button type="button" onClick={copyEmail} className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-200 px-2.5 text-xs font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"><Copy size={13} /> {copied ? "Copied!" : "Copy"}</button>
            </div>
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 hover:shadow-md dark:border-zinc-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Send size={18} /></span>
              <span><span className="block text-sm font-medium">Email me directly</span><span className="block text-sm text-zinc-500">Opens your mail app</span></span>
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 hover:shadow-md dark:border-zinc-800">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Github size={18} /></span>
              <span><span className="block text-sm font-medium">GitHub</span><span className="block text-sm text-zinc-500">View code</span></span>
            </a>
            {hasLinkedIn ? (
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-zinc-200 p-4 hover:shadow-md dark:border-zinc-800">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"><Linkedin size={18} /></span>
                <span><span className="block text-sm font-medium">LinkedIn</span><span className="block text-sm text-zinc-500">Connect</span></span>
              </a>
            ) : null}
          </div>
          <form onSubmit={onSubmit} noValidate className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            {status === "sent" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto text-green-500" size={32} />
                <p className="mt-3 font-semibold">Message sent — thank you!</p>
                <p className="mx-auto mt-2 max-w-xs text-sm text-zinc-500">It&apos;s on its way to {contactEmail}. I&apos;ll reply within a couple of days.</p>
                <button type="button" onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }} className="mt-4 text-sm text-blue-600 hover:underline">Send another</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium">Name</label>
                  <input id="c-name" name="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className={inputCls} />
                  {errors.name ? <p role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium">Email</label>
                  <input id="c-email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className={inputCls} />
                  {errors.email ? <p role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea id="c-msg" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Hi Ronney — let's talk…" rows={5} className="w-full resize-y rounded-lg border border-zinc-200 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-zinc-700" />
                  {errors.message ? <p role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p> : null}
                </div>
                {status === "error" ? (
                  <div role="alert" className="flex gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300">
                    <AlertTriangle size={15} className="mt-0.5 shrink-0" />
                    <span>{serverError} <button type="button" onClick={openMailClient} className="font-semibold underline">Open email app instead</button></span>
                  </div>
                ) : null}
                <button type="submit" disabled={status === "sending"} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70">{status === "sending" ? (<><Loader2 size={15} className="animate-spin" /> Sending…</>) : (<><Send size={15} /> Send message</>)}</button>
                <p className="text-center text-xs text-zinc-400">Sends directly to {contactEmail}. No account needed.</p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
