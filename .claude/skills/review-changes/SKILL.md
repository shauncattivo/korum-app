---
name: review-changes
description: Review the current branch's changes for bugs, privacy and security before the founder merges.
---

Review `git diff main...HEAD` and check:
- **Correctness**: does it meet every acceptance criterion in the spec? Edge cases (empty lists, no internet, logged-out user)?
- **Privacy & security**: RLS on every new table, no secrets in code, no personal data in logs, users can only see their own or shared data.
- **Quality**: clear names, no dead code, reused components, tests cover the change.
- **Experience**: loading and error states, accessible labels, friendly copy.

Fix clear problems yourself, re-run `/test-and-fix`, then give the founder a short verdict: ready to merge, or what still needs a decision.
