module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

  },
  plugins: ['prettier'],
}
