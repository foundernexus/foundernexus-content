---
description: Scaffold a new fnx task brief, assign the next ID, and add a registry row.
---

Scaffold a new task. Steps:

1. **Assign the next ID.** Read `.claude/orchestration/_task-registry.md` and the filenames in
   `.claude/tasks/`. The next ID is `max(existing) + 1`, zero-padded to 3 digits (the EXAMPLE is 000,
   so the first real task is 001).
2. **Create the brief.** Copy `.claude/orchestration/TASK-BRIEF-TEMPLATE.md` to
   `.claude/tasks/NNN-<slug>.md`, where `<slug>` is a short kebab-case name from the request
   (`$ARGUMENTS` if provided; otherwise ask for the objective).
3. **Fill the header block** (ID, Title, Risk, Status = `queued`, Created = today, Owner, Origin) and
   the **Objective**. Seed **Orient first** with the relevant `substrate/` files and any prior draft.
   Seed the **Scope fence** with `substrate/**` (remove that line only for an explicit substrate task).
   Draft evidence-forcing **Definition of done** criteria — name the artifact, the observable fact,
   checkable by an outsider.
4. **Set the risk tier** (trivial / standard / large) and note *why* in Notes. Large or
   invariant-touching → plan to run the planner first.
5. **Add a registry row** to `.claude/orchestration/_task-registry.md`:
   `| NNN | YYYY-MM-DD | <Title> | <risk> | queued | — |`.
6. Report the brief path and recommend the next step (`/dispatch-task NNN`, or planner-first for large).

Do not dispatch or start building here — this only scaffolds.
