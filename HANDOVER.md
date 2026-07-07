# HANDOVER

The living current-state doc. **Append a dated block; never truncate.** A cold orchestrator reads the
most recent block first via `/orient`. The `PreCompact` hook also appends a snapshot here before the
context window compacts. We defend against **goal drift** — name it so future sessions take it seriously.

---

## 2026-07-07 — Agent OS installed

- **State:** The fnx agent operating system is set up (`.claude/`). No content task is in flight
  (`.claude/tasks/.active-task` absent → verify/doc-gate hooks dormant).
- **Baselines observed green** for all four ratchet checks (contract, terminology, emdash, content-lint).
- **In-flight content:** the YPO comparison-page draft (`content/drafts/ypo-alternatives-for-founders.md`)
  is `held_review` — target keyword names a network (needs Court + legal sign-off) and its CTA routes
  (`/apply`, `/nominate`, `/newsletter`) return 404. Do not publish until both clear.
- **Next moves:** either revise the YPO piece toward publishable, or draft the next comparison page from
  an approved unwritten keyword (`substrate/keywords.yaml`). Use `/new-task` then `/dispatch-task`.

### Gotchas

- Hooks are **Node**, not shell — this machine has no jq/python/prettier. See `DECISIONS.md`.
- Transient dispatch state (`.active-task`, `.active-scope`, `.baseline-*`) is gitignored; the registry
  and briefs are committed.

---

## 2026-07-08 — Blog system built + hook fixes

- **Blog:** The Next.js 15 file-based Markdown blog builds green. Routes: `/blog`, `/blog/[slug]`,
  `/blog/rss.xml`, `/sitemap.xml`, `/robots.txt`. Sample post: `content/blog/what-a-good-founder-room-looks-like.md`.
  Author new posts by copying `content/blog/_TEMPLATE.md` (see `content/README.md`). Run it with
  `npm run dev` (or `npm run build && npm run start`).
- **Placeholder skin** — restyle to FounderNexus later: `lib/site.ts` (`SITE`/`BRAND`/`LOGO`; `SITE` is a
  placeholder `https://foundernexus.com` — set the real origin), `PostContent.tsx`, `globals.css`,
  `tailwind.config.ts`. Placeholder cover art via `scripts/make-placeholders.mjs` (swap for real art).
- **Agent OS:** hooks still OFF (`settings.json` not yet written). The 5 defects found by the
  adversarial review are fixed and re-verified. Remaining OS work: write `settings.json` (the enable
  step) and run the Phase-4 proofs.

---

## 2026-07-07 (later) — Hooks enabled; Vercel reconnected

- **State:** `.claude/settings.json` written and live. All 8 hooks wired exactly per
  `.claude/orchestration/README.md` §Enforcement hooks. Phase-4 proofs run (pipe-tested every hook
  against synthetic stdin matching its real `settings.json` command) — all behaved as designed.
  Still no `.active-task`, so `verify-ratchet`/`doc-gate`/`scope-fence` are dormant; `dangerous-edit`/
  `dangerous-command` are live now (always-on).
- **Vercel:** the `mattm@foundernexus.com` Vercel account is now connected (team `FounderNexus`,
  project `foundernexus-content`). Production deployment is READY.
- **Gotcha (not a task, but worth a task):** `terminology`/`emdash`/`content-lint` are NOT clean
  against current `main` — the 2026-07-08 blog merge added `content/README.md`,
  `content/_meta/blog.md`, `content/blog/_TEMPLATE.md` which trip the lane/TL;DR/em-dash rules built
  for `content/drafts/*` articles. Harmless today (ratchet only blocks _new_ findings vs. a task's
  own baseline, and these files predate any task), but the next `/dispatch-task` will silently bake
  them into that task's baseline as "pre-existing." Consider either scoping the checks to
  `content/drafts/` + `content/blog/[!_]*.md` (exclude `_TEMPLATE.md`/`_meta/`), or giving those
  scaffolding files a front-matter shape the checks accept. Not fixed here — out of scope for an
  enablement pass; spin into its own task if it should be fixed.
- **Next moves:** unchanged from above — advance the held YPO piece, or start the next approved
  keyword.

---

## 2026-07-07 (later, design system) — Real brand skin live

- **State:** the placeholder dark skin is replaced with the real FounderNexus design system
  (`tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `lib/site.ts`, new `lib/fonts.ts`).
  Source: a `foundernexus-design` Claude Skill export (zip) the user provided — colors/type/spacing
  tokens, self-hosted Plus Jakarta Sans + Roboto woff2s, real logo files. Full detail in
  `CHANGELOG.md` 2026-07-07 (design system entry).
  Kept the original token _names_, only changed values, so nothing downstream needed touching.
- **Verified:** `tsc --noEmit` and `next build` both clean; visually confirmed via local preview
  (homepage, `/blog`, one post) — real logo, correct fonts/colors, TOC and markdown prose all
  render correctly, no console errors.
- **New source of truth for future brand work:** the design system export also has real logo
  variants, brand SVG icons, full React component primitives (Button, Card, EventCard, forms,
  nav, feedback) with `.prompt.md` usage docs, two full UI-kit recreations (marketing + member
  area), and a complete voice/copy guide — none of that is pulled into this repo yet, only the
  foundational tokens + logo + font. It was unpacked to a scratch dir outside this repo; ask the
  user for the zip again if a future session needs the component source or the voice guide.
- **Not done:** `public/open-graph/og-home.png` still placeholder; per-post front-matter JSON-LD
  `logo` fields (`content/blog/_TEMPLATE.md`, the sample post) still point at the old `/logo.png`
  — cosmetically invisible, worth fixing whenever those files are next touched.
- **Gotcha:** `.claude/launch.json` in _this_ repo (`{"name":"blog","runtimeArgs":["run","start"]}`)
  assumes port 3000 free and requires `npm run build` first (`next start`, not `next dev`). No
  `dev` config exists yet — add one (`next dev`) if faster iteration is wanted later.
