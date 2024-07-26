const globals = require('globals');
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const rules= require('./rules');
// module.exports = {
//   extends: [
//     // 'prettier',
//   ],
// };

module.exports = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  rules.configs.bestPractices,
  rules.configs.es6,
  rules.configs.node,
  rules.configs.style,
  rules.configs.variables,
  rules.configs.typescript,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
      parser: tseslint.parser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // Possible Errors (overrides from recommended set)
      'no-extra-parens': 'off',
      // Strict Mode - for ES6, never use strict.
      strict: ['error', 'never'],
      // DEPRECATED
      // All JSDoc comments must be valid
      // 'valid-jsdoc': [
      //   'error',
      //   {
      //     prefer: { return: 'returns' },
      //     requireParamDescription: true,
      //     requireReturn: false,
      //     requireReturnDescription: false,
      //   },
      // ],
      // TODO: next rules added for tests
      // eslint-disable-next-line
      'prefer-const': 'error',
    }
  }
)
