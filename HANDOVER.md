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

---

## 2026-07-07 (task 001) — founder-decision-quality draft built

- **State:** `content/drafts/founder-decision-quality.md` is drafted (status `in-review` after this
  entry). Informational article for the `founder-decision-quality` cluster, target keyword "how
  founders get better feedback on hard decisions." Names the decision-quality problem in the first
  two sentences, uses a three-part filter (recency of a similar decision, whether input changes the
  shape of the call, independence from the outcome) as the core structure, single `newsletter`
  primary CTA per routing-rules.md §4 fallback. 803 words.
- **Self-verify:** `contract`, `terminology`, `emdash`, `content-lint` all clean on this file
  specifically (zero output when content-lint is pointed at the file directly). Repo-wide runs of
  `terminology`/`emdash`/`content-lint` still surface the pre-existing blog-scaffolding findings
  noted in the 2026-07-07 (later) entry above (`content/README.md`, `content/_meta/blog.md`,
  `content/blog/_TEMPLATE.md`, `content/blog/what-a-good-founder-room-looks-like.md`) — none of
  those are new or touched by this task.
- **No sign-off gate:** no named network or competitor in this piece, so unlike the held YPO draft
  this one carries no Court/legal sign-off blocker. Its CTA route (`/newsletter`) is still a known
  404 per routing-rules.md §2a / CLAUDE.md's live-200 invariant — same open item as the YPO piece,
  not new to this task.
- **Open item carried, not resolved:** the brief flagged that `proof-capture`'s lane definition
  (member interviews / case studies with an internal "permission to feature" ask) does not cleanly
  describe this piece (a general point-of-view article). Drafted as directed (lane pre-assigned in
  `keywords.yaml`, CTA per the newsletter fallback) rather than silently reassigning the lane. See
  task 001's Result/FOLLOW-UPS for the full note.
- **Next moves:** QA reviews task 001 against the brief's Definition of Done. Separately, the
  `/newsletter` (and `/apply`, `/nominate`) 404 routes still block any draft — including this one
  and the held YPO piece — from clearing the live-200 SMOKE gate before publish.

---

## 2026-07-07 (task 001, closed) — pass, archived

QA verdict: pass, all 6 Definition-of-done criteria independently reproduced (see the archived
brief `.claude/tasks/archive/001-founder-decision-quality.md` for full evidence). Brief archived,
registry row -> `archived`/`pass`, `.active-task`/`.active-scope`/`.baseline-001` cleared.
`keywords.yaml`'s `founder-decision-quality` keyword status corrected from `unwritten` to `drafted`
(a scope-fenced file the builder correctly couldn't touch — orchestrator's job, done here).

---

## 2026-07-07 (later still) — Header/footer matched to foundernexus.com; 6 more drafts landed

- **Header/footer:** rebuilt to match the live `www.foundernexus.com` (fetched and inspected it
  directly). Nav: Blog, All events, Log in, Seattle WA. Footer: Company / Contact / Legal columns,
  phone, Terms/Privacy (all linking to the main site since those pages don't exist here), copyright,
  tagline. Full detail in `CHANGELOG.md`. Caught and fixed a copyright-year rendering bug from the
  same edit before it landed (see CHANGELOG).
- **Six more user-authored articles landed in `content/drafts/`:** two comparison pages
  (`compare-eo.md`, `compare-hampton.md`, both `held_review` — named competitors, need Court+legal
  sign-off, same gate as the existing YPO draft) and four decision guides (`decision-*.md`, `drafted`,
  no legal gate). All six share the YPO piece's other open item: their CTA route
  (`/founder-conversation`) is a 404 today, so none can go live regardless of sign-off status.
  **None of this is live** — `content/drafts/` isn't read by the Next.js app, only `content/blog/` is.
- **New reusable CSS:** ported the source articles' custom component classes (`.callout`, `.pull`,
  `.checkbox`, `table.cmp`, `ul.clean`, `.softcta`, `.credibility`, `.eyebrow`) into `globals.css`,
  scoped under `.markdown-body`. Future comparison pages / decision guides can use these directly as
  raw HTML inside the Markdown body. Render-verified locally (screenshotted, not just built clean).
- **`keywords.yaml` updated:** EO/Hampton added as keywords under `peer-advisory-alternatives`; new
  cluster `stage-decision-guides` (approved) holds the four decision guides.
- **Known gap, explicitly not fixed:** tried to add `'EO'` to `named-entity.mjs`'s NETWORKS list and
  `/founder-conversation` to `links.mjs`'s DEAD list (both real, narrow gaps this session's own new
  content exposed). Blocked by the auto-mode permission classifier as hook self-modification. Left
  both scripts untouched rather than working around the block — see CHANGELOG for the exact one-line
  fixes needed; a session with the user present to approve the edit should make them.
- **Next moves:** Court + legal sign-off still needed for `compare-eo.md` / `compare-hampton.md` /
  the held YPO piece before any of the three can move toward publish. The `/founder-conversation`,
  `/newsletter`, `/apply`, `/nominate` 404s block every current draft's live-200 gate — building
  those real destination pages/routes is the actual unblock for "ship something," not more drafting.
