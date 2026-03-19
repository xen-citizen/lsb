# lsb

This project uses Storybook with the `@storybook/addon-mcp` addon enabled.

## Storybook MCP

The Storybook-side MCP server is already configured in [`.storybook/main.js`](/Users/artur.nizamov/sail/lsb/.storybook/main.js) via:

- `@storybook/addon-mcp` in `addons`
- `features.componentsManifest: true`

When Storybook is running locally, the MCP endpoint is available at:

- `http://localhost:6006/mcp`

Useful commands:

- `yarn storybook`
- `yarn storybook:mcp:check`
- `yarn build-storybook`

Verification notes:

- `yarn build-storybook` generates `storybook-static/manifests/components.json`
- the generated component manifest is required by Storybook MCP
- `yarn storybook:mcp:check` calls the local MCP endpoint with `tools/list`
