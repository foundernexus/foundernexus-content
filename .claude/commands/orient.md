---
description: Re-orient a fresh fnx orchestrator from the durable docs, then give a situation report.
---

You are re-orienting a cold orchestrator session. State lives in artifacts, not the context window —
rebuild it by reading, **in this order**:

1. `CLAUDE.md` — how we work + the facts.
2. `HANDOVER.md` — the latest current-state block (and any PreCompact snapshots). Read the most recent
   dated block first; that is the freshest truth.
3. `.claude/orchestration/README.md` — the operating model (roles, lifecycle, verification, hooks).
4. `.claude/orchestration/_task-registry.md` — every task and its status. Note anything `building`,
   `in-review`, `blocked`, or `qa-failed`.
5. `.claude/orchestration/DECISIONS.md` — recent non-obvious calls, so you don't re-litigate them.
6. The strategy substrate: `substrate/campaign-lanes.md`, `substrate/content-standards.md`,
   `substrate/routing-rules.md`, `substrate/keywords.yaml` (which clusters are `approved` / unwritten).

Then check for in-flight state: is `.claude/tasks/.active-task` present? If so, a task was mid-dispatch
— read that brief and its `.baseline-*` and decide whether to resume or reset it.

**Produce a short situation report:**
- **Where we are:** active task (if any), what's `ready`/`queued`, what's blocked.
- **Guardrails live:** which gates are hook-enforced right now (ratcheted) vs agent-followed.
- **Recommended next move:** one concrete action (e.g. "dispatch 001", "planner-first on 002", "the
  YPO draft is held on Court/legal sign-off — pick the next approved unwritten keyword").

Keep it tight. The goal is: a cold session is productive in minutes with nothing lost.
