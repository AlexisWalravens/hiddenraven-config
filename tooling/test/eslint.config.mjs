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
