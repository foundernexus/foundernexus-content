# fnx Task Registry

The status board. One row per task; the row stays even after the brief is archived. The
orchestrator keeps this current — it is the fast index a cold session reads via `/orient`.

Status values: `queued · planning · ready · building · in-review · done · archived · blocked · qa-failed`.

| ID  | Date       | Title                                                     | Risk     | Status   | QA   |
| --- | ---------- | --------------------------------------------------------- | -------- | -------- | ---- |
| 000 | 2026-07-07 | EXAMPLE — worked comparison-page brief                    | standard | archived | pass |
| 001 | 2026-07-07 | Draft: how founders get better feedback on hard decisions | standard | ready    | —    |

<!-- Add new rows at the bottom via /new-task. Keep newest activity reflected in Status. -->
