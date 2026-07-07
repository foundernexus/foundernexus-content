---
name: orchestration-protocol
description: The finish protocol, how to fill a task brief, and the three result-contract templates for the fnx agent OS. Load this at the start of any planner/builder/qa run, and whenever orchestrating a task through dispatch.
---

# Orchestration Protocol (fnx)

You are running inside the fnx agent operating system. **Durable state lives in repo artifacts,
not this context window.** Read `.claude/orchestration/README.md` for the model. This Skill is the
*procedure*: what to do before you return.

**Point, never paste.** Read the brief at its path and the files it points to. Do not rely on
pasted, possibly-stale content.

---

## Finish protocol

### If you are the **builder**

Run this before returning. The hooks are the backstop — do not rely on them to remember for you.

1. **Self-verify.** Run each RATCHET check and read its output:
   - `node .claude/hooks/scripts/checks/contract.mjs`
   - `node .claude/hooks/scripts/checks/terminology.mjs`
   - `node .claude/hooks/scripts/checks/emdash.mjs`
   - `node .claude/hooks/scripts/checks/content-lint.mjs`
   These are ratcheted against the task baseline at `SubagentStop` — you physically cannot finish
   having *added* a failure. Fix new failures; pre-existing baseline ones are not yours to fix here.
2. **Same-change docs** (doc-gate enforces): append a `CHANGELOG.md` entry; update any user-facing
   feature/substrate doc you changed; add a `DECISIONS.md` entry for any non-obvious call.
3. **Append `HANDOVER.md`** with a dated block (append, never truncate).
4. **Gotcha entry** if a trap cost >15 min (in `HANDOVER.md` under a Gotchas heading).
5. **Fill the brief's Result** section; set status `in-review`.
6. **Spin out-of-scope discoveries** to a new task stub via `/new-task` — never silently into the diff.
7. **Update the registry row** (`.claude/orchestration/_task-registry.md`).
8. **Return the Builder contract** (below) as your final message.

### If you are **qa**

Verify each acceptance criterion **adversarially** — try to break it, default skeptical, work from
the **criteria in the brief, not the builder's story**. Produce evidence (a check's output, a quoted
line, a URL). **Edit no files.** Return the QA contract.

### If you are the **planner**

Write the plan into the brief's **Plan** section (or a `.claude/reports/NNN-*.md` for large work),
set status `ready`, return the Planner contract. **Never modify content.** You cannot spawn agents —
request any research from the orchestrator via OPEN QUESTIONS.

### If you are the **orchestrator**, integrating a result

Record the verdict in the brief + registry. Pass → `done`; fail → one bounded fix loop, then re-scope.
**Confirm the doc updates actually landed — check the diff, do not take the builder's word.** Curate
durable learning into `HANDOVER.md` / `DECISIONS.md` now, not the chat. Checkpoint-and-reset near ~40%
context.

---

## How to fill a brief

Copy `.claude/orchestration/TASK-BRIEF-TEMPLATE.md`. Every **Definition of done** criterion must be
**evidence-forcing**: name the file/URL to inspect, state the observable fact that proves it, and be
checkable by someone who never saw the work. The default failure mode of any grader is rubber-stamping;
evidence-forcing criteria are the defense.

- ❌ "Business verification works." / "Voice is on-brand."
- ✅ "`content-lint` returns clean on `content/drafts/x.md`; front-matter `lane` is `linkedin-assisted-demand`; the first two sentences name the founder decision (quote them)."

Seed the **Scope fence** with `substrate/**` for any content-drafting task. Drop that line only for an
explicit substrate/keyword task.

---

## Result contracts (return VERBATIM as your final message)

**Planner:**
```
APPROACH: <2-4 sentences>
CRITICAL FILES: <path — why it matters>, ...
SLICES: <ordered, independently-shippable steps if large; else "single slice">
RISKS: <what could go wrong; invariants in play>
DRAFT ACCEPTANCE CRITERIA: <evidence-forcing + checkable — becomes QA's checklist>
OPEN QUESTIONS: <decisions only the orchestrator/user can make; else "none">
```

**Builder:**
```
STATUS: done | blocked
FILES TOUCHED: <path — what changed>, ...
SUMMARY: <what was built, 2-4 sentences>
SELF-VERIFY: <command -> result for each: contract / terminology / emdash / content-lint / smoke>
CRITERIA: <each acceptance criterion -> met | not-met + one-line evidence>
DOCS UPDATED: <changelog / decisions / HANDOVER / gotchas — which>
RESIDUAL RISK: <what QA should probe hardest; else "none">
FOLLOW-UPS: <out-of-scope discoveries spun to a new task; else "none">
```

**QA:**
```
VERDICT: pass | fail
CRITERIA: <each criterion -> pass | fail + the evidence you observed (check output, quoted line, URL)>
DEFECTS: <severity (blocker/major/minor) — what fails — how to reproduce; else "none">
NOT-COVERED: <anything you could not verify and why>
RECOMMENDATION: <ship | fix-then-ship | re-scope>
```
