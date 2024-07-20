import turboPlugin from 'eslint-plugin-turbo'

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ['**/*.mjs', '**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      ...turboPlugin.configs.recommended.rules
    }
  }
]
