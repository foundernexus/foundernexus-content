import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import type { BlogListing } from "@/lib/content/blog";

// Shared body for the /blog listing: an optional featured hero (page 1 only),
// the post grid for this page, and the prev/next pagination. The page-level
// files own the <header>/metadata; this owns everything below it.
export default function BlogListingGrid({ listing }: { listing: BlogListing }) {
  const { featured, items, page, pageCount } = listing;

  return (
    <>
      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-6 rounded-2xl border border-line bg-panel overflow-hidden mb-14 transition-colors hover:border-accent/40"
        >
          {featured.cover && (
            <div className="relative aspect-[1200/630] md:aspect-auto md:min-h-[19rem] bg-panel2">
              <Image
                fill
                src={featured.cover.url}
                alt={featured.cover.alternativeText || featured.title}
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-hero-navy/45 mix-blend-multiply" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-navy/40 via-transparent to-hero-navy/10" aria-hidden />
            </div>
          )}
          <div className="p-7 flex flex-col justify-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              Featured
            </span>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-fg group-hover:text-accent-soft transition-colors">
              {featured.title}
            </h2>
            {featured.shortDescription && (
              <p className="mt-3 text-muted leading-relaxed">{featured.shortDescription}</p>
            )}
            <span className="mt-5 text-sm font-medium text-accent-soft">Read article →</span>
          </div>
        </Link>
      )}

      {items.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}

      <Pagination page={page} pageCount={pageCount} />
    </>
  );
}
