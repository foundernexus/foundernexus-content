---
description: Dispatch an fnx task by ID — snapshot the baseline, then run plan/build/qa, integrate, and clean up.
---

Dispatch task **$ARGUMENTS** (a task ID like `001`). You are the orchestrator. Load the
`orchestration-protocol` Skill first.

## 1. Make the task active + SNAPSHOT THE BASELINE (do this before any editing)

1. Read `.claude/tasks/NNN-*.md`. Confirm status is `ready` (or `queued` for a trivial task).
2. Write the task ID to `.claude/tasks/.active-task` (e.g. `printf "001" > .claude/tasks/.active-task`).
3. Write the brief's **Scope fence** deny-globs, one per line, to `.claude/tasks/.active-scope`.
4. **Snapshot the ratchet baseline** at the current branch point:
   `node .claude/hooks/scripts/baseline-snapshot.mjs NNN`
   This writes `.claude/tasks/.baseline-NNN/` (the normalized failure set per RATCHET check + the
   base `ref`). The verify hooks now ratchet against it — the builder cannot finish having added a failure.

## 2. Choose the path by risk

- **trivial** — implement inline or with one builder; hooks enforce the floor; skip planner/QA.
- **standard** — spawn `fnx-builder` with the brief path. On return, spawn `fnx-qa` with the brief path.
- **large** — spawn `fnx-planner` first; decompose the returned SLICES into independently-shippable
  units; create one **git worktree per slice** and spawn one `fnx-builder` per worktree **in parallel**
  (all ratchet against the single baseline snapshotted above); spawn `fnx-qa` per slice; then do an
  integration review of the merged diff.
- **audit / migration / cross-checked research** — do not hand-decompose; author a **Dynamic Workflow**
  (Workflow tool) with a Performance Outcomes rubric and save it under `.claude/workflows/`.

Spawn agents via the Agent tool with the agent type + the brief path in the prompt. **Point, never
paste.** Run independent slices in parallel (each in its own worktree).

## 3. Integrate each result

- Record the agent's returned contract into the brief (Result / QA verdict) and update the registry row.
- **Confirm the doc updates actually landed — check the diff, do not take the builder's word.**
- QA pass → status `done`. QA fail → one bounded fix loop (re-dispatch the builder with the DEFECTS),
  then re-scope if still failing.
- For a worktree slice: review the diff, merge to `main`, then remove the worktree.

## 4. Close out

- On `done`: move the brief to `.claude/tasks/archive/` (registry row stays), and **clear the active
  state**: `rm -f .claude/tasks/.active-task .claude/tasks/.active-scope` and
  `rm -rf .claude/tasks/.baseline-NNN`.
- Curate any durable learning into `HANDOVER.md` / `DECISIONS.md` now. Checkpoint-and-reset near ~40% context.
