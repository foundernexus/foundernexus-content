import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/types";

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

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-line bg-panel overflow-hidden transition-colors hover:border-accent/40"
    >
      {post.cover && (
        <div className="relative aspect-[1200/630] bg-panel2">
          <Image
            fill
            src={post.cover.url}
            alt={post.cover.alternativeText || post.title}
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
      <div className="p-5">
        {post.postType && (
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
            {post.postType}
          </span>
        )}
        <h3 className="mt-2 font-semibold leading-snug text-fg group-hover:text-accent-soft transition-colors">
          {post.title}
        </h3>
        {post.shortDescription && (
          <p className="mt-2 text-sm text-muted line-clamp-3">
            {post.shortDescription}
          </p>
        )}
        <div className="mt-4 text-xs text-muted">
          {formatDate(post.publishedAt)} · {post.readingTime} min read
        </div>
      </div>
    </Link>
  );
}
