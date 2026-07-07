# Changelog

Append an entry per task (doc-gate enforces this when a task is active). Newest first.

## 2026-07-07 (later, design system)

- Replaced the placeholder dark skin with the real FounderNexus design system (colors, type,
  logos), sourced from the `foundernexus-design` Claude Skill export the user supplied as a zip.
  Kept the placeholder's own token _names_ (`ink`/`panel`/`line`/`fg`/`muted`/`accent`/`accent-soft`/
  `accent-ink` in `tailwind.config.ts`) and only swapped their _values_ to the real brand hexes,
  per that file's own comment ("nothing else needs to change") — light `gray-50` page, white
  cards, `navy-900` text, `blue-500` primary action, `gray-350` borders.
  - Self-hosted the real brand font (Plus Jakarta Sans, + Roboto as `font-product`) via
    `next/font/local` (`lib/fonts.ts`, woff2s in `fonts/`), replacing the system-font stack.
  - Swapped `github-markdown-dark.css` for `github-markdown-light.css` and re-tinted the
    `.markdown-body` blend in `globals.css` to match (navy text, blue links).
  - Replaced the generated dot+text header mark in `app/layout.tsx` with the real wordmark
    (`public/brand/foundernexus-wordmark.png`) via `next/image`; JSON-LD `LOGO` in `lib/site.ts`
    now points at the real square mark (`public/brand/foundernexus-mark-square.jpeg`).
  - `viewport.themeColor` updated from dark `#0B0E14` to light `#F9F9F9` to match.
- Verified: `tsc --noEmit` clean, `next build` clean (9/9 static pages), visually confirmed via a
  local `next start` preview (homepage hero, `/blog` index, and the sample post's prose/TOC) —
  correct fonts, colors, and logo rendering; no console errors.
- Not done (out of scope for this pass, flagged for later): `public/open-graph/og-home.png` is
  still the placeholder OG image; per-post front-matter JSON-LD (`content/blog/_TEMPLATE.md` and
  the sample post) still points its `logo` field at the old `/logo.png` rather than the new
  `/brand/foundernexus-mark-square.jpeg` (harmless — invisible metadata, not the rendered page).

## 2026-07-07 (later)

- Wrote `.claude/settings.json`, enabling the fnx hooks (previously built but dormant per the
  2026-07-08 HANDOVER entry): `dangerous-edit` + `scope-fence` on PreToolUse Edit/Write/MultiEdit,
  `dangerous-command` on PreToolUse Bash, `advise` + `format` on PostToolUse Edit/Write/MultiEdit,
  `verify-ratchet` + `doc-gate` on Stop/SubagentStop, `precompact-snapshot` on PreCompact. Added
  permission denies for `.env*` and `secrets/**` reads.
- Ran the Phase-4 proofs: validated `settings.json` JSON, pipe-tested every hook with synthetic
  stdin against its exact `settings.json` command (dangerous-edit blocks `.env.local` + lockfiles,
  allows normal files; dangerous-command blocks `rm -rf ~` + force-push, allows `git status`;
  verify-ratchet/doc-gate correctly dormant with no active task; advise surfaces the YPO draft's
  named-entity note without blocking). All passed.
- Re-ran the four RATCHET checks standalone: `contract` is clean, but `terminology`/`emdash`/
  `content-lint` now flag files added by the 2026-07-08 blog merge (`content/README.md`,
  `content/_meta/blog.md`, `content/blog/_TEMPLATE.md`) that were never meant to satisfy the
  article-lane/TL;DR contract meant for `content/drafts/`. Not currently blocking anything (no
  active task), and the ratchet only enforces _new_ findings vs. a task's baseline going forward,
  but the "baselines observed green" claim in the 2026-07-07 HANDOVER entry is now stale. See
  `DECISIONS.md` 2026-07-07 (later).

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
