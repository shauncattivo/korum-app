# Korum

An app that helps people bond and grow closer. Built with Expo (React Native) and Supabase.

## Try it
1. `npm install`
2. Copy `.env.example` to `.env` and add your Supabase keys (optional for now).
3. `npx expo start`, then scan the QR code with the Expo Go app on your phone.

## Checks
- `npm test` runs the tests
- `npm run typecheck` checks types
- `npx expo lint` checks code style

## The Korum Dev Agent
This repo is set up for Claude Code. `CLAUDE.md` holds the agent's rules, and `.claude/skills/` holds its playbooks:
`/write-spec`, `/build-feature`, `/test-and-fix`, `/review-changes`, `/release-check`.
