import { getPosts } from "@/lib/content/blog";
import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

// Fixed lastmod for hardcoded pages — new Date() every build would make every URL
// look freshly modified, a misleading crawl signal (§7.4).
const STATIC_LASTMOD = new Date("2026-07-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const { data: posts } = getPosts({ pageSize: 9999 });
  return [
    { url: SITE, lastModified: STATIC_LASTMOD },
    { url: `${SITE}/blog`, lastModified: STATIC_LASTMOD },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : STATIC_LASTMOD,
    })),
  ];
}
