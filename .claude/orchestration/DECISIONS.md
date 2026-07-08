# fnx Decision Log

Non-obvious calls, with the _why_, so a future session does not re-litigate them. Append only.

---

## 2026-07-07 (publish batch) — "Add everything to Vercel" did not extend to competitor-naming drafts

**Decision.** When the user said "everything right now, all these articles, should be added onto
vercel," promoted the 5 no-named-competitor drafts to `content/blog/` but left `compare-eo.md`,
`compare-hampton.md`, and `ypo-alternatives-for-founders.md` in `content/drafts/`, and asked the
user a direct, specific follow-up question rather than inferring consent to publish those three too.

**Why.** This session's own documentation (`content-standards.md` §6, `comparison-page-playbook.md`)
requires Court + legal sign-off before any content naming a real competitor ships, precisely because
a general instruction is the wrong instrument for a compliance-specific decision. The user's earlier
"i approve them" was in a different, narrower context (approving the CTA-scheduling-tool line of
questioning), not a clear statement that legal risk on three specific named-competitor pieces was
being knowingly accepted. The auto-mode permission classifier independently flagged the first write
attempt on exactly this basis. Treating a broad instruction as covering a specifically-gated action
would defeat the point of having the gate. Asking once, plainly, costs little; publishing something
that needed sign-off and didn't get it is not reversible in the same way.

---

## 2026-07-07 (later still) — Six user-authored articles go to content/drafts/, not content/blog/

**Decision.** All six new user-supplied articles (2 comparisons naming EO/Hampton, 4 decision
guides) were placed in `content/drafts/` with front-matter following the content-lint schema, not
`content/blog/` (which is what the Next.js app actually renders live).

**Why.** Two independent gates apply. (1) The two comparison pages name real competitors by name,
which content-standards.md §6 and comparison-page-playbook.md require Court + legal sign-off for
before publishing — exactly the same rule already holding the existing YPO draft back. (2) All six
pieces' CTA points at `/founder-conversation`, a route that doesn't exist on this site, and
CLAUDE.md's own invariant is explicit: "CTA routes must return a live 200 before publishing."
Landing any of them in `content/blog/` would make them live and reachable via a real URL
immediately (no separate publish step exists in this repo's current build), which would violate
both gates at once. `content/drafts/` is inert (not read by `lib/content/blog.ts`), so it is the
correct staging area regardless of how finished the copy already looks.

**How to apply:** promoting any of these six to `content/blog/` requires, at minimum, a live
`/founder-conversation` destination; the two comparisons additionally require a recorded Court +
legal sign-off. Do not promote on writing-quality grounds alone.

---

## 2026-07-07 (later still) — Left named-entity.mjs / links.mjs gaps unfixed after a permission block

**Decision.** Did not add `'EO'` to `named-entity.mjs`'s NETWORKS list or `/founder-conversation` to
`links.mjs`'s DEAD list, even though both are real, narrow, clearly-justified one-line fixes that
this session's own new content exposed.

**Why.** The auto-mode permission classifier blocked the edit as hook self-modification: the same
session that wrote `.claude/settings.json` wiring these scripts into the PreToolUse/PostToolUse
pipeline then tried to edit the scripts' enforcement logic, with no explicit user request for that
specific change. That is a reasonable thing to gate even though the fix itself is correct and
low-risk. Did not attempt to route around it (e.g., via a different tool). Documented the exact
needed change in `CHANGELOG.md` and `HANDOVER.md` instead, for a session where the user is present
to explicitly approve it.

---

## 2026-07-07 — Adopt the v3 agent OS, adapted for a content repo

**Decision.** Install the regression-gated agent OS. Slug `fnx`; roles `planner / builder / qa`;
full-ratchet verification (not the simpler block-green knob).

**Why.** Durable state must survive cold restarts and compaction. The repo is manual-V0 but the
judgment substrate is load-bearing; the OS lets substantial work run through named agents with a
guaranteed floor.

---

## 2026-07-07 — Hooks are Node `.mjs`, not shell

**Decision.** Every hook and check is a dependency-free Node script invoked as
`node .claude/hooks/scripts/<name>.mjs`.

**Why.** Observed environment: Windows, `node` on PATH, but **no** `jq`, `python`, `prettier`,
`yamllint`, or `js-yaml` (no offline install). Shell hooks would need jq to parse stdin JSON.
Node is the only reliable, cross-platform interpreter, parses stdin JSON natively, and keeps the
scripts portable if the repo later moves to CI/macOS. Fully honors the data-driven manifest and Law 3.

---

## 2026-07-07 — The verification manifest for a content repo

**Decision.** No typecheck/test/build exist. The RATCHET checks are: `contract` (keywords.yaml as
a machine contract), `terminology` (retired terms), `emdash`, `content-lint` (front-matter/TL;DR/lane).
`named-entity` and `links` are ADVISE. Live-200 / dual-pass voice / sign-off are SMOKE.

**Why.** These map directly to the load-bearing invariants in `content-standards.md`,
`campaign-lanes.md`, and `routing-rules.md`. All four ratchet checks are GREEN at baseline
(observed 2026-07-07), so the ratchet protects from day one at near-zero cost.

---

## 2026-07-07 — terminology RATCHET is the STRICT set only

**Decision.** The `terminology` ratchet blocks on the unambiguous retired terms (`Tier N`,
`Chapter chair`). The looser retired terms (`Chapter` alone, `Event` alone) are surfaced by
ADVISE, not blocked.

**Why.** `Event Conversion` is a legitimate campaign lane and `Chapter`/`Event` are common English
words. A noisy blocker would wedge hand-offs for non-violations — against the Law 3 spirit. The
strict set has near-zero false positives; the ratchet + baseline handles any residue.

---

## 2026-07-07 — substrate/ protected via the task scope-fence, not dangerous-edit

**Decision.** `substrate/**` (the source-of-truth operating files, including `keywords.yaml`) is
fenced by the task scope-fence (default-denied in a content brief), not by the always-on
dangerous-edit hook.

**Why.** A keyword-pipeline or substrate-migration task legitimately edits `substrate/`. Making it
an always-on wall would block that legitimate work. Scope-fence is task-aware: a content-drafting
brief fences it; a substrate task's brief drops the fence. The `contract` ratchet independently
guards `keywords.yaml` validity regardless.

---

## 2026-07-07 (later) — Ship `settings.json` as-designed; don't retro-fix the blog-content false positives yet

**Decision.** Enable the hooks exactly as specified in `.claude/orchestration/README.md` §Enforcement
hooks, without also touching `terminology.mjs` / `emdash.mjs` / `content-lint.mjs` to exclude the
new blog scaffolding files that now trip them (`content/README.md`, `content/_meta/blog.md`,
`content/blog/_TEMPLATE.md`).

**Why.** The ratchet model (`verify-ratchet.mjs`) only blocks _new_ findings versus a task's own
baseline snapshot; pre-existing findings — including these — never block anything. Widening the
checks' scope is a real, separate decision (what should content-lint even require of a template or
index file?) that deserves its own task and brief, not a silent side-effect of an enablement pass.
Logged in `HANDOVER.md` 2026-07-07 (later) so it isn't lost.

---

## 2026-07-08 — Adversarial hook review found + fixed 5 real defects (pre-enablement)

A 5-lens multi-agent review (each finding independently refuted) surfaced 5 confirmed defects, now fixed and re-verified. Hooks remain OFF pending `settings.json` + the Phase-4 proofs.

- **(major, Law 3)** A could-not-run baseline (check exits 3 at dispatch) wrote an empty file _indistinguishable from a clean baseline_, so `verify-ratchet` blocked on PRE-EXISTING failures — and the same fail-closed path hit any ratchet check added to the manifest _after_ a snapshot. Fixed: `baseline-snapshot` writes a `<id>.norun` sentinel for could-not-run; `verify-ratchet` skips (fail-open) on a sentinel **or** a missing baseline file. A truly clean baseline is still an empty `<id>` file that enforces absolutely.
- **(major)** `content-lint` flagged quoted-but-valid lanes (`lane: "linkedin-assisted-demand"`) as invalid because the front-matter parser kept the quotes. Fixed by stripping one surrounding quote pair.
- **(minor)** `contract` had the same quote bug on `lane` / `status` / `draft`. Fixed.
- **(minor)** `scope-fence`'s `globToRegex` was case-sensitive, so `Substrate/**` bypassed a `substrate/**` fence on the Windows case-insensitive filesystem. Fixed with the `i` flag.

---

## 2026-07-07 (task 001) — founder-decision-quality CTA and asset_type calls

**Decision.** Drafted `content/drafts/founder-decision-quality.md` with `primary_cta: "Newsletter
signup"` routed to `/newsletter`, and `asset_type: article` (not `comparison_page` or another
value), keeping the `proof-capture` lane as pre-assigned in `keywords.yaml` rather than
reassigning it.

**Why.** `proof-capture`'s own table CTA (`routing-rules.md` §2, "Request permission to feature")
is an internal ask aimed at an existing member going on record, not a reader-facing CTA — this
piece has no member subject and no interview. Per routing-rules.md §4's fallback rule ("if a
keyword cluster's lane is ambiguous, or an asset doesn't cleanly fit a lane, default to the
lowest-commitment ask: newsletter signup"), used newsletter signup instead. `asset_type: article`
was chosen because it is the closest match to what content-standards.md and campaign-lanes.md
describe for a general point-of-view informational piece; no comparison, no named network, no
interview subject, so `comparison_page` (the only other asset_type seen in this repo, on the YPO
draft) does not fit. Did not reassign the `proof-capture` lane itself, per the brief's explicit
instruction to draft as written and flag the mismatch in FOLLOW-UPS rather than silently
overriding a human-approved `keywords.yaml` assignment.
