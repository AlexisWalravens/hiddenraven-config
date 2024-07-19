# Installation

Install `@hiddenraven/eslint-config`

```sh
pnpm add -D eslint @hiddenraven/eslint-config
# or
bun add -D eslint @hiddenraven/eslint-config
```

Then add the plugin to your ESLint config:

```js
// eslintrc.config.mjs
import baseConfig, { restrictEnvAccess } from '@hiddenraven/eslint-config/base'

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...restrictEnvAccess]
```

`restrictEnvAccess` contains custom rules to prevent importing environment variables from `process.env` when using [@t3-oss/env](https://env.t3.gg/docs/introduction).

## This package also includes config for `React` & `NextJS`

### With `React`

```js
// eslintrc.config.mjs
import baseConfig, { restrictEnvAccess } from '@hiddenraven/eslint-config/base'
import reactConfig from '@hiddenraven/eslint-config/react'

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...reactConfig, ...restrictEnvAccess]
```

### With `NextJS`

```js
// eslintrc.config.mjs
import baseConfig, { restrictEnvAccess } from '@hiddenraven/eslint-config/base'
import nextjsConfig from '@hiddenraven/eslint-config/nextjs'
import reactConfig from '@hiddenraven/eslint-config/react'

/** @type {import('typescript-eslint').Config} */
export default [
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess
]
```
