import { getPosts, getBlogHub } from "@/lib/content/blog";
import { SITE, BRAND } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";

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
  const { data: posts } = getPosts({ pageSize: 9 });
  const featured = hub?.featuredPost;
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Writing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{hub?.title || "Blog"}</h1>
        {hub?.subtitle && (
          <p className="mt-3 text-muted max-w-2xl leading-relaxed">{hub.subtitle}</p>
        )}
      </header>

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

      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
