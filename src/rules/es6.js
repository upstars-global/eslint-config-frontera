/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  rules: {
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'before'],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    'no-this-before-super': 'error',
    'no-var': 'warn',
    'object-shorthand': ['off', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'off',
    'prefer-template': 'error',
    'require-yield': 'error',
  },
};
