import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-04-09";

  return [
    {
      url: "https://example.com/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

