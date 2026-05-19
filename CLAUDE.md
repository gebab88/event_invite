# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the dev server at http://localhost:3000
- `npm run build` — produce a deployable static bundle in `build/`
- `npm test` — run the Jest watcher; append `-- --watchAll=false` for a single run

## Architecture

Create React App project. The entire app is `src/App.js` — a single functional component with no state, router, or API calls. Invite content lives in an `invite` const at the top of `App.js`; editing the invite means editing that object. Image assets live in `public/` and are referenced by absolute path. See `PRD.md` for product intent and constraints.
