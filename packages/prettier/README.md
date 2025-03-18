# Installation

Install `@hiddenraven/prettier-config`

```sh
pnpm add -D prettier @hiddenraven/prettier-config
```

Then add the config to your `prettier.config.mjs`:

`prettier.config.mjs`

```mjs
import config from '@hiddenraven/prettier-config'

export default {
  ...config
  // Overrides
  // ...
}
```

## If you project uses TailwindCSS

`prettier.config.mjs`

```mjs
import configWithTailwind from '@hiddenraven/prettier-config/with-tailwind'

export default {
  ...configWithTailwind,
  // When using Tailwind CSS v4 you must specify your CSS file entry point, which includes your theme, custom utilities, and other Tailwind configuration options. To do this, use the tailwindStylesheet option in your Prettier configuration.
  // Note that paths are resolved relative to the Prettier configuration file.
  tailwindStylesheet: './src/app.css'

  // If you still have a Tailwind JS config add the path to it.
   "tailwindConfig": "./tailwind.config.js"
}
```
