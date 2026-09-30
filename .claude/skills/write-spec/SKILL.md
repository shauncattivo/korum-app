---
name: write-spec
description: Turn a feature idea for Korum into a short, clear spec before any code is written.
---

1. Restate the idea in one sentence. If something important is unclear, ask at most 3 short questions; otherwise pick sensible defaults and say which.
2. Write `docs/specs/<feature-name>.md` with:
   - **Why**: the user problem, in one or two lines.
   - **User story**: "As a ___, I want ___, so that ___."
   - **Screens**: each screen and what's on it.
   - **Data**: new or changed Supabase tables and columns, and who may read/write them (RLS).
   - **Acceptance criteria**: a checklist that a test can check.
   - **Out of scope**: what we are not doing now.
3. Show the founder a 5-line summary and ask for approval before building.
