# Installation

Install `@hiddenraven/eslint-config`

```sh
pnpm add -D eslint @hiddenraven/eslint-config
```

Then add the plugin to your ESLint config:

```js
// prettier.config.cjs
module.exports = {
  extends: [
    '@hiddenraven/base'
  ],
```

## This package also includes config for `React` & `NextJS`

### With `React`

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@hiddenraven/base', '@hiddenraven/react']
}
```

### With `NextJS`

```js
// .eslintrc.cjs
module.exports = {
  extends: ['@hiddenraven/base', '@hiddenraven/react', '@hiddenraven/nextjs']
}
```
