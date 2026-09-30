---
name: release-check
description: Check Korum is ready for a test or store release and draft release notes.
---

1. All checks pass on `main` (`/test-and-fix`).
2. Version bumped in `app.json`.
3. Every migration is applied in the order it was created; nothing destructive without a backup.
4. Privacy: privacy policy link present, data deletion flow works.
5. Draft release notes (user-friendly, 3-6 bullets) and app store "What's new" text.
6. List what the founder must do by hand (e.g. `eas build`, `eas submit`, store review). Never publish yourself.
