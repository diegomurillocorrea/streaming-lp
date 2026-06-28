import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "DAIEGO Streaming — Netflix, Disney+, Crunchyroll y Prime Video accesibles.html",
    "DAIEGO Streaming — Netflix, Disney+, Crunchyroll y Prime Video accesibles_files/**",
  ]),
])

export default eslintConfig
