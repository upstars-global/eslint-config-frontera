import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import rules from './rules/index.js';

const config = ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  eslintConfigPrettier,
  rules.configs.bestPractices,
  rules.configs.es6,
  rules.configs.node,
  rules.configs.style,
  rules.configs.variables,
  ...rules.configs.typescript,
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,mts,tsx}'],
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
    plugins: {
      '@typescript-eslint': ts.plugin,
    },
    rules: {
      // Possible Errors (overrides from recommended set)
      'no-extra-parens': 'off',
      // Strict Mode - for ES6, never use strict.
      strict: ['error', 'never'],
    }
  }
)

export default config
