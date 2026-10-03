import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/server";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...["fullstack-task-platform", "api-service-starter"].map((slug) => ({
      url: `${base}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
