import Link from "next/link";

// Prev/Next + page indicator for the /blog listing. Page 1 lives at /blog;
// pages 2+ at /blog/page/N. Renders nothing when there is only one page.
function href(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export default function Pagination({ page, pageCount }: { page: number; pageCount: number }) {
  if (pageCount <= 1) return null;
  const hasPrev = page > 1;
  const hasNext = page < pageCount;

  return (
    <nav
      className="mt-14 flex items-center justify-between border-t border-line pt-8 text-sm"
      aria-label="Blog pagination"
    >
      {hasPrev ? (
        <Link href={href(page - 1)} className="font-medium text-accent-soft hover:text-accent transition-colors" rel="prev">
          ← Newer
        </Link>
      ) : (
        <span className="text-muted/50">← Newer</span>
      )}

      <span className="text-muted">
        Page {page} of {pageCount}
      </span>

      {hasNext ? (
        <Link href={href(page + 1)} className="font-medium text-accent-soft hover:text-accent transition-colors" rel="next">
          Older →
        </Link>
      ) : (
        <span className="text-muted/50">Older →</span>
      )}
    </nav>
  );
}
