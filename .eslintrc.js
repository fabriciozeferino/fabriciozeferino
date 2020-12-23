module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/component-name-in-template-casing': ['error', 'PascalCase']
  },
  plugins: ['prettier']
}
