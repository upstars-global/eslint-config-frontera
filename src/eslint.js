// const bestPractices = require.resolve('./rules/best-practices');
// const es6 = require.resolve('./rules/es6');
// const node = require.resolve('./rules/node');
// const style = require.resolve('./rules/style');
// const eslint = require.resolve('./rules/typescript');
// const variables = require.resolve('./rules/variables');

import globals from 'globals';
import js from '@eslint/js';

// module.exports = {
//   extends: [
//     // 'plugin:@typescript-eslint/recommended',
//     // 'prettier',
//     // bestPractices,
//     // es6,
//     // node,
//     // style,
//     // variables,
//     // eslint
//   ],
//   plugins: ['@typescript-eslint'],
// };

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
      // parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    rules: {
      // Possible Errors (overrides from recommended set)
      'no-extra-parens': 'off',
      // Strict Mode - for ES6, never use strict.
      strict: ['error', 'never'],
      // All JSDoc comments must be valid
      'valid-jsdoc': [
        'error',
        {
          prefer: { return: 'returns' },
          requireParamDescription: true,
          requireReturn: false,
          requireReturnDescription: false,
        },
      ],
      // TODO: next rules added for tests
      // eslint-disable-next-line
      'prefer-const': 'error',
    }
  }
]
