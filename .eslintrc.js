module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    indent: ["error", 2, { ignoredNodes: ["TemplateLiteral"] }],
    "template-curly-spacing": "off",
    quotes: ["warn", "single"],
    semi: ["warn", "never"],
    "comma-dangle": ["warn", "always-multiline"],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
