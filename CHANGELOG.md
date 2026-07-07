# Changelog

Append an entry per task (doc-gate enforces this when a task is active). Newest first.

## 2026-07-07 (later still, check-script fixes, user-approved)

- Added `'EO'` and `"Entrepreneurs' Organization"` to `named-entity.mjs`'s NETWORKS list, and
  `/founder-conversation` to `links.mjs`'s DEAD list. These were blocked earlier in this session by
  the auto-mode permission classifier (hook self-modification); the user explicitly approved both
  when asked directly. Verified: `named-entity.mjs content/drafts/compare-eo.md` now flags "EO,
  Entrepreneurs' Organization" correctly. Full four-check repo-wide re-run confirms nothing new
  broke (only the known pre-existing blog-scaffolding findings remain).
- **New gap found while verifying, not fixed:** `links.mjs content/drafts/decision-first-senior-hire-seed.md`
  still returns empty even after adding `/founder-conversation` to DEAD, because that CTA is raw
  HTML (`<a href="/founder-conversation">`), and `links.mjs`'s dead-route regex requires
  whitespace/line boundaries around the route string (`(^|\s)/founder-conversation(\s|$)`), which a
  quote-bounded `href="..."` attribute never satisfies. This is a deeper detection gap than the
  one-line list addition just approved, so it was not fixed here without asking again. All six raw-
  HTML-CTA drafts in this repo are silently invisible to this ADVISE check as a result.

## 2026-07-07 (later still, header/footer + 6 user-authored articles)

- **Header/footer now match `www.foundernexus.com`.** Fetched the live site and rebuilt
  `app/layout.tsx`'s header (logo, "Blog", "All events" -> `www.foundernexus.com/events`, "Log in"
  -> `www.foundernexus.com/member-login`, "Seattle, WA") and footer (Company / Contact / Legal
  columns, phone, Terms/Privacy links to the main site, copyright, tagline) to mirror it. External
  utility pages (events, login, terms, privacy) link out to the main site since they don't exist on
  this content property; `/blog` and `/blog/rss.xml` stay local.
  - Fixed a bug introduced in the same edit: the copyright year used a nonsensical
    `new Date(0).getFullYear() === 1970` check (a leftover habit from an unrelated context with a
    `Date()`-usage restriction that does not apply to this Next.js app) which rendered as no year at
    all in some timezones. Replaced with a plain `new Date().getFullYear()`. Caught via the local
    preview screenshot before commit, not left in.
- **Six user-authored articles migrated into `content/drafts/`**, source: standalone styled HTML
  files the user built previously (`fn-compare-eo.html`, `fn-compare-hampton.html`, and four
  `fn-decision-*.html` guides), already using this repo's real brand tokens. Converted to Markdown +
  the required draft front-matter (content-lint schema), body content preserved verbatim (copy
  unchanged), custom layout blocks (pull-quotes, callouts, checklists, comparison tables) kept as
  raw HTML in the Markdown body (`rehype-raw` already supports this).
  - `compare-eo.md`, `compare-hampton.md` -> `status: held_review` (named competitors: EO, Hampton),
    same gate as the existing YPO draft (content-standards.md §6, comparison-page-playbook.md).
    **Not cleared to publish** — needs Court + legal sign-off.
  - `decision-first-senior-hire-seed.md`, `decision-series-a-operating-layer.md`,
    `decision-board-dynamics-after-series-b.md`, `decision-founder-led-sales-limits.md` ->
    `status: drafted`, no named competitor, no legal gate. All six share the same open item as the
    held YPO piece: their CTA (`/founder-conversation`) doesn't exist on this site yet, so none can
    clear the live-200 SMOKE gate regardless of sign-off status.
  - Ported the source articles' custom CSS (`.callout`, `.pull`, `.checkbox`, `table.cmp`,
    `ul.clean`, `.softcta`, `.credibility`, `.eyebrow`) into `app/globals.css`, scoped under
    `.markdown-body`, using the same brand tokens already in the design system. Render-verified by
    temporarily copying one decision guide and the Hampton comparison into `content/blog/` locally
    (never committed there), screenshotting both, then removing them and rebuilding clean before
    this commit — pull-quotes, checklists, comparison tables, and the CTA box all render correctly.
  - Registered all six in `substrate/keywords.yaml`: the two comparisons as new keywords under the
    existing `peer-advisory-alternatives` cluster; the four decision guides under a new cluster
    `stage-decision-guides` (lane `linkedin-assisted-demand`, `status: approved` — user-authored
    batch, approved 2026-07-07 by Robroy in this session). Also fixed a miss from the prior task:
    `founder-decision-quality`'s keyword-level `status` in keywords.yaml was still `unwritten` after
    that draft was built; corrected to `drafted` with its `draft:` path (substrate/** is
    scope-fenced from builder agents, so this was the orchestrator's job, not the builder's).
- **Known gap, not fixed (blocked):** `named-entity.mjs`'s hardcoded network list doesn't include
  "EO" (only "Entrepreneurs Organization", no apostrophe variant), so it doesn't flag
  `compare-eo.md` the way it correctly flags `compare-hampton.md`. `links.mjs`'s dead-route list
  doesn't include `/founder-conversation` (only `/apply`, `/nominate`, `/newsletter`), so it's silent
  on the new CTA all six of these pieces (well, four of six) use. Both are real, narrow fixes to the
  check scripts themselves — attempted in this session and blocked by the auto-mode permission
  classifier as hook self-modification (reasonable: same session that wired the hooks up editing
  their logic). Flagging here rather than routing around the block. A human approving that specific
  edit (or a future session with the user present to approve it) should add `'EO'` and
  `"Entrepreneurs' Organization"` to `NETWORKS` in `named-entity.mjs`, and `'/founder-conversation'`
  to `DEAD` in `links.mjs`.

## 2026-07-07 (task 001, founder-decision-quality draft)

- Drafted `content/drafts/founder-decision-quality.md` for the approved `founder-decision-quality`
  keyword cluster, target keyword "how founders get better feedback on hard decisions." Informational
  article: names the decision-quality problem (founders getting encouragement instead of feedback
  that could change their mind on a hard call) in the first two sentences, gives founders a
  three-part filter for weighting outside input (recency of a similar decision, whether it changes
  the shape of the call, independence from the outcome), and closes on precisely naming the decision
  before seeking input.
- Front-matter: `lane: proof-capture`, `cluster: founder-decision-quality`, `asset_type: article`,
  `primary_cta: "Newsletter signup"`, `status: drafted`, per the brief's routing-rules.md §4 fallback
  call (proof-capture's table CTA, "Request permission to feature," is an internal ask with no
  reader-facing route; the lane itself has an open-question flag carried from scaffolding, see
  brief's Notes and this task's FOLLOW-UPS).
- 803 words. Self-verified clean on `contract`, `terminology`, `emdash`, `content-lint` against
  just this file; the four checks' pre-existing findings are all in `content/README.md`,
  `content/_meta/blog.md`, `content/blog/_TEMPLATE.md`, `content/blog/what-a-good-founder-room-looks-like.md`
  (the known blog-scaffolding gotcha from the earlier HANDOVER entry), none touched by this task.

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
