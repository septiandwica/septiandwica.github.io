import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs["flat/recommended"],
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // TypeScript - No "any" type allowed
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      
      // React / JSX (HTML tags) readability & clean code
      "react/self-closing-comp": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
      
      // Tailwind CSS & styling
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",

      // General code readability and modern JS practices
      "prefer-const": "error",
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "eqeqeq": ["error", "always"],
    }
  }
]);

export default eslintConfig;
