const bestPractices = require.resolve('./rules/best-practices');
const es6 = require.resolve('./rules/es6');
const node = require.resolve('./rules/node');
const style = require.resolve('./rules/style');
const eslint = require.resolve('./rules/typescript');
const variables = require.resolve('./rules/variables');

/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    bestPractices,
    es6,
    node,
    style,
    variables,
    eslint
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
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
  }
};
