/**
 * Server-only config. Never import this file from a "use client" component.
 * Uses private `SITE_URL` (no NEXT_PUBLIC_ prefix) so the value is not
 * inlined into browser JavaScript. Only metadata, sitemap, and other
 * server code should use this.
 */
export function getSiteUrl(): string {
  const raw = process.env.SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
