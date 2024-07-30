import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import rules from './rules/index.js';

const config = ts.config(
  {
    ...js.configs.recommended,
    name: 'eslint/js/recommended',
  },
  ...ts.configs.recommended,
  {
    ...eslintConfigPrettier,
    name: 'eslint-config/prettier',
  },
  rules.configs.bestPractices,
  rules.configs.es6,
  ...rules.configs.node,
  rules.configs.stylistic,
  rules.configs.variables,
  ...rules.configs.typescript,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.amd,
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
      parser: ts.parser,
      sourceType: 'module',
    },
    name: 'frontera:eslint:setup',
    plugins: {
      '@typescript-eslint': ts.plugin,
    },
    rules: {
      // Strict Mode - for ES6, never use strict.
      strict: ['error', 'never'],
    }
  }
)

export default config
