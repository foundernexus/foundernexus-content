import { getSocialDerivatives } from "@/lib/content/social";
import { BRAND } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

// Internal review surface — never indexed, never linked from sitemap.xml.
export const metadata: Metadata = {
  title: `Social queue | ${BRAND}`,
  robots: "noindex, nofollow",
};

export default function SocialIndex() {
  const items = getSocialDerivatives();

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <header className="mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Internal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Social queue</h1>
        <p className="mt-3 text-muted max-w-2xl leading-relaxed">
          LinkedIn and newsletter drafts atomized from published posts. Nothing here is sent
          automatically — review, edit, then send it yourself. Not indexed by search engines.
        </p>
      </header>

      {items.length === 0 ? (
        <p className="text-muted">Nothing queued right now.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/social/${item.slug}`}
              className="group block rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent/40"
            >
              {item.status && (
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                  {item.status}
                </span>
              )}
              <h2 className="mt-2 font-semibold leading-snug text-fg group-hover:text-accent-soft transition-colors">
                {item.title}
              </h2>
              {item.primaryCta && (
                <p className="mt-2 text-sm text-muted">CTA: {item.primaryCta}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
