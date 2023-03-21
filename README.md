## Quick Start

Clone the repo and run:

```
yarn install
```

### Development

To start the project locally, run:

```bash
yarn start
```

Open `http://localhost:4078` with your browser to view the site.

## Documentation

### Requirements

- Node.js >= 18

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn start` — Starts the application in development mode at `http://localhost:4078`.
- `yarn build` — Compile your application and make it ready for deployment.
- `yarn serve` — Serve the production build of your site
- `yarn clean` — Wipe out the cache (`.cache` folder).
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Images } from '@/components';
```

### Commiting updates

Read the [commitlint.config.js](./commitlint.config.js) file for the commit rules and to determine what type-enum to use based on your update. Always make sure you don't leave and empty commit message and only commit in lowercase.

```
docs: update readme
```