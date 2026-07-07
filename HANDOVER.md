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
