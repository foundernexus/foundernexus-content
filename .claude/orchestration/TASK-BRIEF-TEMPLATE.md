<!--
  fnx task brief. Copy this to .claude/tasks/NNN-slug.md via /new-task.
  The brief is the contract handed to spawned agents. Point, never paste.
-->

# NNN — <Title>

- **ID:** NNN
- **Title:** <short title>
- **Risk:** trivial | standard | large
- **Status:** queued | planning | ready | building | in-review | done | archived | blocked | qa-failed
- **Created:** YYYY-MM-DD
- **Owner:** <orchestrator/human>
- **Origin:** <keyword id / lane / request that spawned this>

## Objective

<1–3 sentences. What decision does this content help a founder make? If you cannot name the
decision, it does not ship (content-standards §1).>

## Orient first (read these before doing anything)

- `CLAUDE.md`, `.claude/orchestration/README.md`, `HANDOVER.md`
- `substrate/content-standards.md`, `substrate/campaign-lanes.md`, `substrate/routing-rules.md`
- <the specific lane / keyword cluster / playbook this task touches>
- <any prior draft, review, or report to build on>

## Scope fence (do NOT touch — seeds `.active-scope`)

- `substrate/**` <!-- the constitution; remove this line ONLY for an explicit substrate task -->
- <other paths this task must not edit>

## Definition of done (every criterion evidence-forcing)

Each criterion must (a) name the artifact/file to inspect, (b) state the observable fact that
proves it, (c) be checkable by someone who never saw the work. Weak: "voice is good." Strong:

- [ ] `content/drafts/<slug>.md` front-matter carries a valid `lane`, single `primary_cta`, and
      `asset_type`; `content-lint` returns clean.
- [ ] The draft names the founder decision it serves in the first two sentences (quote them).
- [ ] Zero retired terms and zero em dashes (`terminology` + `emdash` clean).
- [ ] Every claim about founder pain/funding/market is sourced or removed (list each claim → source).
- [ ] Exactly one primary CTA, matched to the lane per `routing-rules.md` (name it).
- [ ] <asset-specific: e.g. atomizes into 3–5 LinkedIn posts in `social/queue/<slug>.md`>

## Self-verify (builder runs; ratcheted by hook, not self-attested)

- `node .claude/hooks/scripts/checks/contract.mjs`
- `node .claude/hooks/scripts/checks/terminology.mjs`
- `node .claude/hooks/scripts/checks/emdash.mjs`
- `node .claude/hooks/scripts/checks/content-lint.mjs`
- SMOKE (manual, note in Result): live CTA 200 · dual-pass voice review · sign-off if named-network

## Notes

- **Ceremony tier:** <trivial/standard/large> — <why>.
- **Invariants in play:** <retired terms / lane gate / keyword contract / suppression / humans-send>.

## Plan (planner fills; large work → link a `reports/NNN`)

<APPROACH / CRITICAL FILES / SLICES / RISKS / DRAFT ACCEPTANCE CRITERIA / OPEN QUESTIONS>

## Result (builder fills)

<STATUS / FILES TOUCHED / SUMMARY / SELF-VERIFY / CRITERIA / DOCS UPDATED / RESIDUAL RISK / FOLLOW-UPS>

## QA verdict (orchestrator records from the QA agent's return)

<VERDICT / CRITERIA / DEFECTS / NOT-COVERED / RECOMMENDATION>
