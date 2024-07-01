/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  rules: {
    'global-require': 'off',
    'handle-callback-err': 'warn',
    'no-mixed-requires': 'warn',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'warn',
  }
}
