/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  rules: {
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    // "any" temporary solution until full typing is not available
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    // allow using "require"
    '@typescript-eslint/no-var-requires': 'off',
    'init-declarations': 'off',
    'no-shadow': 'off',
  },
  // eslint-disable-next-line sort-keys
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
