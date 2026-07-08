import type { Metadata, Viewport } from "next";
import "./globals.css";
import "github-markdown-css/github-markdown-light.css";
import Image from "next/image";
import Link from "next/link";
import { plusJakartaSans, roboto } from "@/lib/fonts";
import { SITE, BRAND, LOGO } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#F9F9F9",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE), // REQUIRED: makes relative og:image absolute (§7.5)
  title: {
    default: `${BRAND} — Judgment infrastructure for founders`,
    template: `%s | ${BRAND}`,
  },
  description: "Judgment infrastructure for venture-scale founders.",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: BRAND,
      url: SITE,
      logo: LOGO,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: BRAND,
      url: SITE,
      publisher: { "@id": `${SITE}/#org` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${roboto.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgLd).replace(/</g, "\\u003c"),
          }}
        />
        <header className="sticky top-0 z-10 border-b border-line/80 bg-ink/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label={BRAND}>
              <Image
                src="/brand/foundernexus-wordmark.png"
                alt={BRAND}
                width={1982}
                height={250}
                priority
                className="h-6 w-auto"
              />
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/blog"
                className="text-muted hover:text-fg transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/social"
                className="text-muted hover:text-fg transition-colors"
              >
                Social
              </Link>
              <a
                href="https://www.foundernexus.com/events"
                className="text-muted hover:text-fg transition-colors"
              >
                All events
              </a>
              <a
                href="https://www.foundernexus.com/member-login"
                className="text-muted hover:text-fg transition-colors"
              >
                Log in
              </a>
              <span className="hidden sm:inline text-muted">Seattle, WA</span>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-fg text-white mt-20">
          <div className="mx-auto max-w-5xl px-4 py-14 grid gap-10 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <Image
                src="/brand/foundernexus-wordmark.png"
                alt={BRAND}
                width={1982}
                height={250}
                className="h-5 w-auto brightness-0 invert"
              />
              <p className="mt-4 text-sm text-white/60">
                A community exclusively for venture-scale founders.
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Company
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://www.foundernexus.com/#proposition"
                    className="hover:text-white transition-colors"
                  >
                    Value proposition
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.foundernexus.com/#admission"
                    className="hover:text-white transition-colors"
                  >
                    Club admission
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.foundernexus.com/#event-info"
                    className="hover:text-white transition-colors"
                  >
                    Upcoming events
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Contact
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="tel:+13603292121"
                    className="hover:text-white transition-colors"
                  >
                    +1 (360) 329-2121
                  </a>
                </li>
                <li>Seattle, WA</li>
                <li className="text-white/60">
                  Online. Everywhere your room is.
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Legal
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://www.foundernexus.com/terms-and-conditions"
                    className="hover:text-white transition-colors"
                  >
                    Terms of use
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.foundernexus.com/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="/blog/rss.xml"
                    className="hover:text-white transition-colors"
                  >
                    RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-5xl px-4 py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-2">
              <span>
                © {new Date().getFullYear()} {BRAND}. All rights reserved.
              </span>
              <span>A community exclusively for venture-scale founders.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
