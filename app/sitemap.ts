import { getPosts, BLOG_PAGE_SIZE } from "@/lib/content/blog";
import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

// Fixed lastmod for hardcoded pages — new Date() every build would make every URL
// look freshly modified, a misleading crawl signal (§7.4).
const STATIC_LASTMOD = new Date("2026-07-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const { data: posts } = getPosts({ pageSize: 9999 });
  // Paginated listing pages: /blog (page 1) + /blog/page/2.. . Page 1 pulls one
  // post out as the hero, so the grid paginates over (total - 1) posts.
  const pageCount = Math.max(
    1,
    Math.ceil(Math.max(0, posts.length - 1) / BLOG_PAGE_SIZE),
  );
  const listingPages: MetadataRoute.Sitemap = [];
  for (let p = 2; p <= pageCount; p++) {
    listingPages.push({
      url: `${SITE}/blog/page/${p}`,
      lastModified: STATIC_LASTMOD,
    });
  }
  return [
    { url: SITE, lastModified: STATIC_LASTMOD },
    { url: `${SITE}/mission`, lastModified: STATIC_LASTMOD },
    { url: `${SITE}/blog`, lastModified: STATIC_LASTMOD },
    ...listingPages,
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : STATIC_LASTMOD,
    })),
  ];
}
