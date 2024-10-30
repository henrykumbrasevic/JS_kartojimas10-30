import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,

  eslintConfigPrettier,
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "off",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
];
