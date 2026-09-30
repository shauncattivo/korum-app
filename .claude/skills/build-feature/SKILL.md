---
name: build-feature
description: Build an approved Korum feature spec into working code on its own branch.
---

1. Read the spec in `docs/specs/`. If there is none, run `/write-spec` first.
2. Create a branch: `git checkout -b feature/<short-name>`.
3. Plan the smallest set of changes (database, then data helpers, then screens). Share the plan in 3-6 bullets.
4. Database: add a migration in `supabase/migrations/` with Row Level Security policies.
5. Code: follow the layout and rules in `CLAUDE.md`. Reuse components in `src/components/`.
6. Write tests for each acceptance criterion.
7. Run `/test-and-fix`.
8. Commit with a clear message, then summarise for the founder: what changed, how to try it (`npx expo start`), anything they must decide.
