import { getSocialDerivative, getSocialDerivatives } from "@/lib/content/social";
import { BRAND } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PostContent from "@/components/PostContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getSocialDerivatives().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSocialDerivative(slug);
  if (!item) return { title: "Not found" };
  return {
    title: `${item.title} — social queue | ${BRAND}`,
    robots: "noindex, nofollow", // internal review surface, never indexed
  };
}

export default async function SocialDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getSocialDerivative(slug);
  if (!item) return notFound();

  return (
    <article className="mx-auto max-w-5xl px-4 py-14">
      <nav className="text-sm text-muted mb-8">
        <Link href="/social" className="hover:text-fg transition-colors">
          ← Social queue
        </Link>
      </nav>

      <header className="max-w-3xl">
        {item.status && (
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            {item.status}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.08]">
          {item.title}
        </h1>
        <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted">
          {item.sourceArticle && (
            <div>
              <dt className="inline font-medium text-fg">Source: </dt>
              <dd className="inline">{item.sourceArticle}</dd>
            </div>
          )}
          {item.primaryCta && (
            <div>
              <dt className="inline font-medium text-fg">Primary CTA: </dt>
              <dd className="inline">{item.primaryCta}</dd>
            </div>
          )}
          {item.route && (
            <div>
              <dt className="inline font-medium text-fg">Route: </dt>
              <dd className="inline break-all">{item.route}</dd>
            </div>
          )}
          {item.lane && (
            <div>
              <dt className="inline font-medium text-fg">Lane: </dt>
              <dd className="inline">{item.lane}</dd>
            </div>
          )}
        </dl>
      </header>

      <div className="mt-10 max-w-3xl">
        <PostContent content={item.content} />
      </div>
    </article>
  );
}
