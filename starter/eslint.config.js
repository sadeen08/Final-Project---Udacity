import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "no-console": "warn",
    },
  },
];
