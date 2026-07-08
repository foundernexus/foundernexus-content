import { getPost, getPosts } from "@/lib/content/blog";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PostContent from "@/components/PostContent";
import TableOfContents from "@/components/TableOfContents";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // ISR; or remove for pure static

export async function generateStaticParams() {
  return getPosts().data.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  const { seo } = post;
  const canonicalUrl = seo?.canonicalURL || `${SITE}/blog/${slug}`;
  return {
    // `absolute` bypasses the layout's "%s | BRAND" template — the authored
    // metaTitle already includes the brand, so this avoids double-branding.
    title: seo?.metaTitle ? { absolute: seo.metaTitle } : post.title,
    description: seo?.metaDescription || post.shortDescription,
    alternates: { canonical: canonicalUrl },
    robots: seo?.metaRobots || undefined,
    openGraph: {
      title: seo?.ogTitle || post.title,
      description: seo?.ogDescription || post.shortDescription,
      url: canonicalUrl,
      type: "article",
      ...(seo?.shareImage?.url && { images: [seo.shareImage.url] }),
    },
  };
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-5xl px-4 py-14">
      {/* JSON-LD: escape < so post content can't break out of the <script> (§9.9) */}
      {post.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.seo.structuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="text-sm text-muted mb-8">
        <Link href="/blog" className="hover:text-fg transition-colors">
          ← Blog
        </Link>
      </nav>

      <header className="max-w-3xl">
        {post.postType && (
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {post.postType}
          </span>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
          {post.title}
        </h1>
        <div className="mt-5 text-sm text-muted">
          {post.author ? `${post.author} · ` : ""}
          {formatDate(post.publishedAt)} · {post.readingTime} min read
        </div>
      </header>

      {post.cover && (
        <div className="relative w-full aspect-[1200/430] overflow-hidden rounded-2xl mt-10 border border-line bg-panel2">
          <Image
            fill
            src={post.cover.url}
            alt={post.cover.alternativeText || post.title}
            quality={80}
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-hero-navy/45 mix-blend-multiply"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-hero-navy/40 via-transparent to-hero-navy/10"
            aria-hidden
          />
        </div>
      )}

      <div className="mt-12 grid lg:grid-cols-[1fr_15rem] gap-12">
        <div className="min-w-0">
          <PostContent content={post.content} />
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents content={post.content} />
          </div>
        </aside>
      </div>
    </article>
  );
}
