# Project Instructions

## Project Summary

- This project was scaffolded with Yarn using Vite + React.
- Storybook is installed and working with the `@storybook/react-vite` framework.
- Storybook MCP is enabled via `@storybook/addon-mcp`.
- Chromatic is installed and configured for both local publishing and GitHub Actions CI.

## Important Commands

- Install deps: `yarn`
- Run app: `yarn dev`
- Build app: `yarn build`
- Run Storybook: `yarn storybook`
- Build Storybook: `yarn build-storybook`
- Publish to Chromatic locally: `yarn chromatic`

## Storybook Notes

- Storybook config lives in `.storybook/`.
- MCP is enabled in `.storybook/main.js`.
- `features.componentsManifest` is turned on because Storybook MCP needs `manifests/components.json`.
- The MCP endpoint should be available from the running Storybook server at `/mcp`.

## Chromatic Notes

- `chromatic` is a direct dev dependency.
- GitHub Actions workflow is in `.github/workflows/chromatic.yml`.
- CI expects a GitHub repository secret named `CHROMATIC_PROJECT_TOKEN`.
- Chromatic requires Git history, so CI uses full checkout history.

## Git / Repo Conventions

- The main remote is configured as `origin`.
- The SSH remote uses the host alias `github-xen-citizen`:
  `git@github-xen-citizen:xen-citizen/lsb.git`
- `main` is pushed and tracks `origin/main`.

## Generated Files

- `storybook-static/` is intentionally ignored and should not be committed.
- `dist/` is also generated output and should stay untracked.

## Session History Summary

- Created the Vite React app in this directory with Yarn.
- Installed and fixed Storybook startup issues.
- Added missing `typescript` dependency required by Storybook 10's React preset.
- Published Storybook successfully to Chromatic.
- Added Storybook MCP support and enabled component manifest generation.
- Cleaned up the repo so `storybook-static/` is ignored instead of committed.
- Added GitHub Actions automation for Chromatic publishing on push.
- Configured and pushed the repository to GitHub using the SSH host alias remote.
