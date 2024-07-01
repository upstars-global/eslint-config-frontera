# eslint-config-frontera

An opinionated set of ESLint rules for Frontera projects

## Installation
Install eslint-config-frontera:

```bash
$ yarn add -D upstars-global/eslint-config-frontera#vesrion
```

Note: `vesrion` must be replaced with available version. see [releases](https://github.com/upstars-global/eslint-config-frontera/releases)

Then, add eslint-config-frontera to the "extends" array in your ESLint file.
Make sure to put it last, so it gets the chance to override other configs.

```json
{
  "extends": ["frontera"]
}
```

A few ESLint plugins are supported as well:
```json
{
  "extends": [
    "frontera",
    "frontera/vue",
    "frontera/prettier"
  ]
}
```

## Example configuration
Using default configurations:
```json
{
  "extends": ["frontera", "frontera/prettier"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "quotes": [ "error", "single" ]
  }
}
```

Using specific vue configurations:
```json
{
  "extends": ["frontera", "frontera/vue", "frontera/prettier"],
  "rules": {
    "vue/valid-v-for": "error"
  }
}
```
