import nodePlugin from 'eslint-plugin-n'

export default [
  nodePlugin.configs['flat/recommended-script'],
  {
    name: 'frontera:rules:node',
    rules: {
      'n/global-require': 'off',
      'n/handle-callback-err': 'warn',
      'n/no-mixed-requires': 'warn',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-process-env': 'off',
      'n/no-process-exit': 'off',
      'n/no-restricted-modules': 'off',
      'n/no-sync': 'warn',
    }
  }
]
