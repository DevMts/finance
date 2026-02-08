module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-require-imports': 'off',
  },

  settings: {
    react: {
      version: "detect"
    }
  }
};
