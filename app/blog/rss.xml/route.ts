import { getPosts } from "@/lib/content/blog";
import { SITE, BRAND } from "@/lib/site";

export const dynamic = "force-static";

const FEED = {
  title: `${BRAND} Blog`,
  description: "Judgment infrastructure for venture-scale founders.",
  link: `${SITE}/blog`,
};

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const rfc822 = (d?: string) => {
  if (!d) return null;
  const x = new Date(d);
  return Number.isNaN(x.getTime()) ? null : x.toUTCString();
};

export async function GET() {
  const { data: posts } = getPosts({ pageSize: 9999 });
  const items = posts
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}`;
      const pub = rfc822(p.publishedAt);
      const desc = p.shortDescription ?? p.seo?.metaDescription ?? "";
      return [
        "    <item>",
        `      <title>${esc(p.title)}</title>`,
        `      <link>${esc(url)}</link>`,
        `      <guid isPermaLink="true">${esc(url)}</guid>`,
        pub ? `      <pubDate>${pub}</pubDate>` : null,
        desc ? `      <description>${esc(desc)}</description>` : null,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(FEED.title)}</title>
    <link>${esc(FEED.link)}</link>
    <description>${esc(FEED.description)}</description>
    <language>en</language>
    <lastBuildDate>${rfc822(posts[0]?.publishedAt) ?? new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${esc(`${SITE}/blog/rss.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
