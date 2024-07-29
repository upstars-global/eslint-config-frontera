import pluginVue from 'eslint-plugin-vue'
import eslint from './eslint.js'

export default [
  ...eslint.map((config) => {
    return {
      ...config,
      files: ['*.vue', '**/*.vue'],
    };
  }),
  ...pluginVue.configs['flat/base'],
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    rules: {
      'vue/array-bracket-spacing': [
        'warn',
        'always',
        {
          arraysInArrays: true,
          objectsInArrays: true,
          singleValue: true,
        },
      ],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          multiline: 'always',
          singleline: 'never',
        },
      ],
      'vue/html-indent': [
        'error',
        4,
        {
          alignAttributesVertically: true,
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          ignores: [],
        },
      ],
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': [
        'warn',
        {
          multiline: { max: 1 },
          singleline: { max: 3 },
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/no-multi-spaces': 'warn',
      'vue/no-mutating-props': 'off',
      'vue/no-unused-components': ['error', { ignoreWhenBindingPresent: true }],
      'vue/no-unused-vars': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/no-v-for-template-key-on-child': 'error',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-type-constructor': 'off',
      'vue/return-in-computed-property': 'off',
      'vue/valid-v-model': 'error'
    }
  },
  // {
  //   files: ['**/*.vue'],
  //   rules: {
  //     'no-undef': 'off',
  //   },
  // }
]

// module.exports = {
//   parser: 'vue-eslint-parser',
//   plugins: ['vue'],
// };
