# fnx Task Registry

The status board. One row per task; the row stays even after the brief is archived. The
orchestrator keeps this current — it is the fast index a cold session reads via `/orient`.

Status values: `queued · planning · ready · building · in-review · done · archived · blocked · qa-failed`.

| ID  | Date       | Title                                                     | Risk     | Status   | QA   |
| --- | ---------- | --------------------------------------------------------- | -------- | -------- | ---- |
| 000 | 2026-07-07 | EXAMPLE — worked comparison-page brief                    | standard | archived | pass |
| 001 | 2026-07-07 | Draft: how founders get better feedback on hard decisions | standard | archived | pass |
| 002 | 2026-07-07 | Draft: warm intro to VC vs cold outreach                  | standard | archived | pass |
| 003 | 2026-07-07 | Draft: how founders get a fast-pass into VC conversations | standard | archived | pass |
| 004 | 2026-07-07 | Draft: what actually gets a VC to read your deck          | standard | archived | pass |
| 005 | 2026-07-07 | Draft: cold email to VCs, does it ever work               | standard | archived | pass |

<!-- Add new rows at the bottom via /new-task. Keep newest activity reflected in Status. -->
