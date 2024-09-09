/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

import defaultConfig from './index.mjs'

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  ...defaultConfig,
  tailwindFunctions: ['cn', 'cva'],
  plugins: [...defaultConfig.plugins, 'prettier-plugin-tailwindcss']
}

export default config
