const globals = require('globals')

module.exports = [
  {
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.es2025,
        ...globals.node
      },
      sourceType: 'module',
    },
    rules: {
      indent: ['error', 2],
      'no-console': 'error',
      'no-debugger': 'error',
      quotes: ['error', 'single'],
      'sort-keys': 'error'
    }
  }
]
