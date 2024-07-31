# eslint-config-frontera

An opinionated set of ESLint rules for Frontera projects

## Installation
Install eslint-config-frontera:

```bash
$ yarn add -D eslint upstars-global/eslint-config-frontera#vesrion
```

Note: `vesrion` must be replaced with available version. For flat configuration use version - v2.x.x.
see [releases](https://github.com/upstars-global/eslint-config-frontera/releases)

## Configuration

Add eslint-config-frontera to the `eslint.config.js` (or `eslint.config.mjs`) file in your directory.

```js
// eslint.config.mjs
import eslintFrontera from 'eslint-config-frontera';

export default [
  ...eslintFrontera,
];
```

## Example configuration
Using default configurations:
```js
// eslint.config.mjs
import eslintFrontera from 'eslint-config-frontera';

export default [
  ...eslintFrontera,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@stylistic/js/quotes': [ 'error', 'single' ],
      'n/no-unsupported-features/node-builtins': [
        'error',
        {
          version: '>=22.4.1',
          ignores: [],
        },
      ],
    },
  },
];
```

Using specific vue configurations:
```js
// eslint.config.mjs
import eslintFronteraVue from "eslint-config-frontera/vue";

export default [
  ...eslintFronteraVue,
  {
    rules: {
      'vue/no-mutating-props': 'error',
    },
  },
];
```

Note: configuration for vue includes base config for `eslint-config-frontera` with rules for `js` and `ts`.
