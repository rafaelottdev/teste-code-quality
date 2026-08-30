import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier"

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    ".next/**", "out/**",
    "build/**", "coverage/**", "node_modules/**", "next-env.d.ts",
  ]),

  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "no-console": "off",
      "no-debugger": "error",
      "eqeqeq": ["error", "always"],

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      "react-hooks/exhaustive-deps": "error",
    },
  },

  prettier,
])
