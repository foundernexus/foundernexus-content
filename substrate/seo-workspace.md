# SEO workspace (orientation README)

Durable orientation for FounderNexus SEO work, so a cold session starts oriented instead of
re-deriving the setup. This is the "workspace README" from the `seo-project-setup` skill, adapted
to a repo that already is the content workspace. Facts here; procedures live in `.claude/skills/`,
strategy in the other `substrate/` docs, and the audit trail in `substrate/research/`.

## Working folder

This repo (`foundernexus-content`) is the SEO workspace. There is no separate `seo-workspace/` tree.

- **Keyword contract:** `substrate/keywords.yaml` (human strategy to machine execution).
- **Strategy:** `substrate/campaign-lanes.md`, `substrate/content-standards.md`,
  `substrate/comparison-page-playbook.md`, `substrate/openseo-integration.md`.
- **Research audit trail:** `substrate/research/` (one dated note per OpenSEO session; see its README).
- **Draft/published content:** `content/blog/` (markdown), rendered by the Next.js app in this repo.

## OpenSEO / project status

- **Connected:** hosted OpenSEO app, wired via committed `.mcp.json` -> `https://app.openseo.so/mcp`.
- **Account:** `mattm@foundernexus.com`, hosted mode. Each teammate runs OAuth login once.
- **Project:** Default, domain `foundernexus.com`, US (locationCode 2840) / English.
  Dashboard: `https://app.openseo.so/p/69315faf-98d8-409c-9d58-1eb06565e550`.
- **Credits:** hosted plan; check the live balance with `whoami` before large batches. Ask before
  planned batches over 2,000 credits. GSC reads (performance, URL inspection) cost 0 credits.
- **Search Console:** connected. Confirm with `get_search_console_performance`, do not assume.

## Sites in scope

- **Live public site:** `foundernexus.com`. It is an events/community platform
  (`/events`, `/event/*`, `/member-login`, `/pre-qualify`, `/registration`). Homepage is indexed and
  ranks #1 for the brand. www correctly 301s to non-www.
- **Blog (this repo's `content/blog/`):** NOT deployed to the live domain as of 2026-07-21.
  `/blog` and every post return 404, and none of the 124 live `sitemap.xml` URLs are `/blog`.
  See `substrate/research/2026-07-21-gsc-clustering-blog-not-live.md`.

## Goal

Non-branded organic clicks that convert to applications, roughly a two-quarter horizon. Success
metric: non-branded organic sessions reaching the apply path (today `/pre-qualify` or `/registration`;
`/apply` is 404 per `routing-rules.md` §2a).

## Positioning (pointer, not restated)

Signal-to-room / judgment-infrastructure. Five approved campaign lanes gate all content
(`campaign-lanes.md`). Comparison pages target YPO, EO, Hampton, Vistage, Chief. Terminology and
anti-slop are load-bearing invariants (see root `CLAUDE.md` and `content-standards.md`).

## Data and assets

- **GSC:** live, first-party, 0 credits to read.
- **Keyword sets:** 6 clusters / 22 posts in `keywords.yaml`, all `status: published` in repo.
- **Rank tracker / backlinks:** not yet set up in OpenSEO. Homepage has a few real referring domains
  (geekwire, ascend.vc) around Court Lorenzini / DocuSign.

## Current blocker and recommended next workflow

The near-term SEO goal has **no surface to rank** until the blog is live, in the sitemap, and
internally linked from an indexed page. That is a publishing/eng decision, not a keyword task.

- **Do first (not a research run):** decide where the blog lives and ship it, then get `/blog` URLs
  into `sitemap.xml`.
- **After the blog is live:** re-run `keyword-clustering` (GSC-driven). Striking-distance and
  cannibalization checks only become meaningful once pages are crawlable. Pilot candidate:
  `peer-advisory-alternatives`.
- **Live now, independent of the blog:** the event pages are the only indexed organic surface, and
  `court lorenzini` has repeated demand landing on arbitrary event pages with 0 clicks. A canonical
  founder bio/about page is a cheap, live win.

## Guardrails (unchanged)

OpenSEO informs and proposes; a human decides lane, priority, terminology, anti-slop, and legal
sign-off. Automation prepares, humans send. Nothing here bypasses the gates in root `CLAUDE.md`.
