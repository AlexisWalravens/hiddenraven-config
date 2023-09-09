# Installation

Install `@hiddenraven/prettier-config`

```sh
pnpm add -D prettier @hiddenraven/prettier-config
```

Then add the config to your `package.json`:

`package.json`
```json
{
  "prettier": "@hiddenraven"
}
```

## If you project uses TailwindCSS
`package.json`
```json
{
  "prettier": "@hiddenraven/with-tailwind"
}
```

## If you want to extend the configuraiton, for example if you need to specify a custom tailwind config path:

Instead of adding the `prettier` key to your `package.json`, create a `prettier.config.mjs` and add the following lines to it.

```js
// prettier.config.mjs
import config from '@hiddenraven/prettier-config/with-tailwind'

export default {
  // If your tailwind.config is not at the root of the project
  tailwindConfig: './path/to/tailwind.config.ts'

  // Any other overwritten rules...
}
```
