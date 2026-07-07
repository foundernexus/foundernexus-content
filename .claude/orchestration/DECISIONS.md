# fnx Decision Log

Non-obvious calls, with the _why_, so a future session does not re-litigate them. Append only.

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
