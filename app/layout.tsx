import type { Metadata, Viewport } from "next";
import "./globals.css";
import "github-markdown-css/github-markdown-dark.css";
import Link from "next/link";
import { SITE, BRAND, LOGO } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#0B0E14",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE), // REQUIRED: makes relative og:image absolute (§7.5)
  title: {
    default: `${BRAND} — Judgment infrastructure for founders`,
    template: `%s | ${BRAND}`,
  },
  description: "Judgment infrastructure for venture-scale founders.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: BRAND,
    url: `${SITE}/`,
    images: [{ url: "/open-graph/og-home.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND,
    description: "Judgment infrastructure for venture-scale founders.",
  },
  alternates: { canonical: `${SITE}/` },
};

// Site-wide Organization + WebSite graph (§9.5).
const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE}/#org`, name: BRAND, url: SITE, logo: LOGO },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: BRAND,
      url: SITE,
      publisher: { "@id": `${SITE}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd).replace(/</g, "\\u003c") }}
        />
        <header className="sticky top-0 z-10 border-b border-line/80 bg-ink/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
              {BRAND}
            </Link>
            <nav className="text-sm">
              <Link href="/blog" className="text-muted hover:text-fg transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line mt-20">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted flex items-center justify-between">
            <span>© {BRAND}</span>
            <a href="/blog/rss.xml" className="hover:text-fg transition-colors">
              RSS
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
