# fnx Agent Operating System

The operating model for running substantial content work through named sub-agents whose
durable state lives in **repo files, not chat history**. Any session (including a cold one)
can re-orient in minutes via `/orient` and lose nothing.

This file is **reference**. Executable steps live in the Skill
(`.claude/skills/orchestration-protocol/SKILL.md`); must-hold rules live in hooks
(`.claude/settings.json`, driven by `.claude/verify-manifest.json`); facts live in `CLAUDE.md`.

---

## The three laws

1. **State lives in artifacts, not the context window.** Every durable fact (strategy, task
   status, what shipped, what's left, what we learned) is written to a file. The context
   window is disposable scratch; the repo is memory. This is the defense against goal drift:
   compaction is lossy and drops "don't do X" constraints first.
2. **Lower each guarantee to the right layer.** Prompts are followed ~70–90% of the time;
   hooks execute at 100%. If a rule *must* hold, it belongs in a hook, not a sentence.
3. **A hook fails open on its own malfunction.** Only a parsed, genuine, *new* failure blocks
   (exit 2). A check that *cannot run* (missing tool, no baseline, parser error) warns to
   stderr and exits 0. A hook that blocks because it is broken is worse than no hook.

| If it is a…                    | It belongs in…                          |
|--------------------------------|-----------------------------------------|
| Fact Claude should always hold | `CLAUDE.md`                             |
| Multi-step procedure           | a Skill (`.claude/skills/`)             |
| Rule that must hold every time | a hook (`.claude/settings.json`)        |
| Noisy/parallel work to isolate | a subagent (+ git worktree)             |

---

## The four roles

| Role | Who | Reads | Writes | Spawns |
|---|---|---|---|---|
| **Orchestrator** | the main session | everything | task briefs, the registry; integrates results; curates learnings into durable docs | planner / builder / qa; all helper agents; authors Dynamic Workflows |
| **`fnx-planner`** | spawned, read-only on content | the brief + pointed files | the brief's **Plan** section (a `reports/NNN` for large work) | — (requests research from the orchestrator) |
| **`fnx-builder`** | spawned, full tools | the brief | the content + same-change docs + the brief's **Result** | — |
| **`fnx-qa`** | spawned, cannot edit | the brief's acceptance criteria (**not** the builder's story) | nothing — returns a verdict the orchestrator records | — |

> **Hard platform constraint: a subagent cannot spawn another subagent.** Only the main
> session orchestrates. Fan-out: **small** → the orchestrator spawns helpers and hands
> distilled results into the brief (point, never paste); **large** (audits, migrations,
> many independent units) → the orchestrator authors a **Dynamic Workflow** where background
> subagents *can* nest.

The orchestrator holds product taste and strategy; spawned agents don't — so the brief
carries the *why* and the standards, and QA checks product/quality criteria, not just "does it parse."

---

## The lifecycle of one task

A file `.claude/tasks/NNN-slug.md`, mirrored in `_task-registry.md`:

`queued → planning → ready → building → in-review → done → archived` (+ `blocked`, `qa-failed`).

- **queued** — orchestrator scaffolds the brief (`/new-task`).
- **planning** (large only) — planner fills the Plan section, returns a distilled plan.
- **ready** — orchestrator finalizes acceptance criteria + scope fence.
- **building** — `/dispatch-task` makes the task active and **snapshots the baseline first**
  (writes `.active-task`, `.active-scope`, and `.baseline-NNN/`), then the builder implements.
  The verify hooks ratchet against that baseline, so the builder physically cannot finish
  having *added* a failure.
- **in-review** — qa verifies adversarially against the criteria, returns a verdict. Pass →
  done; fail → one bounded fix loop → re-scope.
- **done** — shipped + docs updated (doc-gate enforced this; the orchestrator confirms the
  diffs landed); dispatch clears `.active-task`.
- **archived** — done briefs move to `tasks/archive/`; the registry row stays.

### Ceremony by risk

- **trivial** (copy fix, one file, no meaning change): orchestrator or one builder inline;
  hooks enforce the floor; no planner, no QA. (No dispatch ⇒ no baseline ⇒ verify hooks run
  dormant per Law 3 — fine, it's trivial.)
- **standard** (a normal article, social atomization, a brief): brief → builder → qa. Planner
  optional. The sweet spot.
- **large** (a new lane, a migration of substrate, multi-asset campaign, an audit): brief →
  planner → orchestrator decomposes into independently-shippable slices → one builder per
  slice in its own worktree, in parallel → qa per slice → orchestrator integration review.
  For audits / cross-checked research, prefer a **Dynamic Workflow with a Performance
  Outcomes rubric**.

Anything touching a load-bearing invariant (retired terminology, the keyword contract, the
lane gate, "automation prepares / humans send", suppression) is at least standard.

---

## The verification model

Every check carries a **behavior** (tool reliability decides it) and an **event** (speed
decides it). Source of truth: `.claude/verify-manifest.json`.

- **RATCHET** — block only on failures NEW vs the task baseline. Clean baseline ⇒ absolute
  (any failure blocks). Default for any parseable check, *even a red one*.
- **ADVISE** — run + surface, never block. For crashing/flaky tools or signals you cannot
  enforce (e.g. a human sign-off). Promotes to RATCHET when it becomes enforceable.
- **SMOKE** — a manual checklist line, not a hook.

This repo has no typecheck/test/build. Its checks (all Node, no external deps):

| id | what it enforces | behavior | event |
|---|---|---|---|
| `contract` | `substrate/keywords.yaml` stays a valid machine contract (lane gate, status enums, draft paths) | RATCHET | Stop |
| `terminology` | no NEW retired term in shipped content (`Tier N`, `Chapter chair`) | RATCHET | Stop |
| `emdash` | no NEW em dash in shipped content | RATCHET | Stop |
| `content-lint` | draft front-matter complete, valid lane, TL;DR present | RATCHET | Stop |
| `named-entity` | flags named-network content needing Court+legal sign-off | ADVISE | PostToolUse |
| `links` | internal links resolve; known-404 CTA routes flagged | ADVISE | PostToolUse |
| `smoke` | live CTA 200, human dual-pass voice review, sign-off confirmation | SMOKE | manual |

Because the ratchets compare against the baseline, a future messy baseline still only blocks
**new** violations — so this generalizes without per-repo cleanup.

---

## Enforcement hooks

All obey Law 3 (fail open on their own malfunction); exit 2 = block, stderr = the reason.

1. **verify-ratchet** (`Stop`/`SubagentStop`) — the ratchet above. Dormant with no `.active-task`.
2. **doc-gate** (`Stop`/`SubagentStop`) — only when a task is active: content changed but
   `CHANGELOG.md`/`HANDOVER.md` not appended → block with the missing items.
3. **scope-fence** (`PreToolUse` Edit|Write|MultiEdit) — deny-glob wall from `.active-scope`.
   Dormant when empty. Default fence for a content task: `substrate/**` (the constitution).
4. **dangerous-edit** (`PreToolUse` Edit|Write|MultiEdit) — **always on**: `.env*`, lockfiles,
   generated/VCS dirs.
5. **dangerous-command** (`PreToolUse` Bash) — **always on**: `rm -rf` of broad targets,
   destructive SQL, force-push, fork bomb, pipe-to-shell, and **automated sending**
   (Mailchimp/SendGrid/LinkedIn) per engagement-guardrails §1.
6. **format** (`PostToolUse`) — deliberate no-op here (prose line breaks are meaningful; no
   safe formatter installed). Fail-open.
7. **advise** (`PostToolUse`) — runs the ADVISE checks on the changed file, surfaces, exit 0.
8. **precompact-snapshot** (`PreCompact`) — appends orchestrator state to `HANDOVER.md`, exit 0.

Deny permission rules (a deny beats any allow): `Read(./.env)`, `Read(./.env.*)`, `Read(./secrets/**)`.

---

## Worktrees, models, context

- **Worktrees:** every parallel slice gets its own git worktree; the builder works isolated,
  can fail without touching `main`, and the orchestrator reviews the diff before merge. All
  slices ratchet against the single baseline `dispatch` snapshotted at the shared branch point.
- **Models (this project is not cost-constrained — bias up):** orchestrator = strongest Opus;
  planner = Opus; qa = Opus (a weak grader rubber-stamps); builder = Opus (Sonnet only for
  trivially mechanical slices); helper/search = Sonnet floor. Pinned in each agent's frontmatter.
- **Context discipline:** quality degrades ~40% context use; the orchestrator externalizes
  state to `HANDOVER.md` *before* the band, then checkpoint-and-resets. `PreCompact` is the net.

## Result contracts + finish protocol

Each agent's final message IS its return value — raw structured data, not prose. The three
contracts (Planner / Builder / QA) and the finish protocol live in the Skill. Point, never
paste: give agents the brief path + pointers, not stale pasted content.

## Commands

- `/orient` — re-orient a fresh orchestrator.
- `/new-task` — scaffold a brief, assign the next ID, add a registry row.
- `/dispatch-task NNN` — snapshot baseline → (plan) → build → qa → integrate → clean up.
