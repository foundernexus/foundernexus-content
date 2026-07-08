import { getBlogListing, getBlogHub } from "@/lib/content/blog";
import { SITE, BRAND } from "@/lib/site";
import type { Metadata } from "next";
import BlogListingGrid from "@/components/BlogListingGrid";

export async function generateMetadata(): Promise<Metadata> {
  const hub = getBlogHub();
  const canonical = hub?.seo.canonicalURL || `${SITE}/blog`;
  return {
    title: hub?.seo.metaTitle ? { absolute: hub.seo.metaTitle } : `Blog | ${BRAND}`,
    description: hub?.seo.metaDescription,
    alternates: {
      canonical,
      types: { "application/rss+xml": `${SITE}/blog/rss.xml` }, // <head> RSS discovery
    },
    openGraph: {
      title: hub?.seo.ogTitle,
      description: hub?.seo.ogDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default function BlogIndex() {
  const hub = getBlogHub();
  const listing = getBlogListing(1);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Writing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{hub?.title || "Blog"}</h1>
        {hub?.subtitle && (
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">{hub.subtitle}</p>
        )}
      </header>

      <BlogListingGrid listing={listing} />
    </div>
  );
}
