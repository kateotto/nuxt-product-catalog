// eslint.config.ts
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/no-unused-vars': 'error',
    'no-console': 'warn',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],
  }
})