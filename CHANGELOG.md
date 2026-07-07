# Changelog

Append an entry per task (doc-gate enforces this when a task is active). Newest first.

## 2026-07-08

- Built the file-based Markdown blog system (Next.js 15 + React 19 + Tailwind) per the build guide:
  server-only content layer (`lib/content/blog.ts` + `lib/types.ts`), routes (`/blog`, `/blog/[slug]`,
  `/blog/rss.xml`, `/sitemap.xml`, `/robots.txt`), full SEO (`generateMetadata`, self-canonical,
  OG/Twitter, JSON-LD Article + BreadcrumbList + Organization/WebSite), `next/image` AVIF/WebP,
  in-page TOC, one sample post + `_TEMPLATE.md` + hub singleton. Green `tsc` + `next build`; all SEO
  surfaces verified in prerendered output and live routes (RSS serves `application/rss+xml`).
  Placeholder skin (github-markdown-css) pending the FounderNexus restyle.
- Fixed 5 hook defects surfaced by the pre-enablement adversarial review (see `DECISIONS.md` 2026-07-08).

## 2026-07-07

- Installed the fnx agent operating system: `.claude/` scaffolding (orchestration model, Skill, three
  agents, commands, Node hooks + checks, verify-manifest), plus root `CLAUDE.md`, `HANDOVER.md`, and
  this changelog. Verification gates ratchet against a per-task baseline. Baselines green at install.
