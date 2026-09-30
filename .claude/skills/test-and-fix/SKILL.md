---
name: test-and-fix
description: Run Korum's tests, type check and lint, and fix failures until everything passes.
---

1. Run `npm test`, `npx tsc --noEmit` and `npx expo lint`.
2. For each failure: find the real cause, fix the code (not the test, unless the test is wrong), and re-run.
3. Never skip or delete a failing test to make things pass.
4. For a bug report: first write a test that reproduces the bug, then fix it.
5. Report: what failed, what you fixed, and that all checks now pass.
