import { getBlogListing, getBlogHub, BLOG_PAGE_SIZE, getPosts } from "@/lib/content/blog";
import { SITE, BRAND } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListingGrid from "@/components/BlogListingGrid";

interface Props {
  params: Promise<{ page: string }>;
}

// Pages 2..N only. Page 1 is /blog (canonical), so it is not generated here.
export async function generateStaticParams() {
  const total = getPosts().meta.pagination.total;
  const featuredOffset = total > 0 ? 1 : 0; // page 1 pulls one post out as the hero
  const pageCount = Math.max(1, Math.ceil((total - featuredOffset) / BLOG_PAGE_SIZE));
  const params: { page: string }[] = [];
  for (let p = 2; p <= pageCount; p++) params.push({ page: String(p) });
  return params;
}

function parsePage(raw: string): number | null {
  if (!/^\d+$/.test(raw)) return null;
  return Number(raw);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const n = parsePage(page);
  const hub = getBlogHub();
  const base = hub?.title || "Blog";
  const canonical = `${SITE}/blog/page/${n ?? page}`;
  return {
    title: { absolute: `${base} — Page ${n ?? page} | ${BRAND}` },
    description: hub?.seo.metaDescription,
    alternates: {
      canonical,
      types: { "application/rss+xml": `${SITE}/blog/rss.xml` },
    },
    robots: "index, follow",
    openGraph: { title: `${base} — Page ${n ?? page}`, url: canonical, type: "website" },
  };
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page } = await params;
  const n = parsePage(page);
  if (n === null || n < 2) return notFound(); // page 1 lives at /blog

  const listing = getBlogListing(n);
  if (n > listing.pageCount) return notFound();

  const hub = getBlogHub();

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Writing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{hub?.title || "Blog"}</h1>
        <p className="mt-3 text-muted">
          Page {n} of {listing.pageCount}
        </p>
      </header>

      <BlogListingGrid listing={listing} />
    </div>
  );
}
