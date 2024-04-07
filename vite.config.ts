/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import sdk from "vite-plugin-sdk";

export default defineConfig({
  plugins: [sdk()],
  build: {
    lib: {
      entry: "src/index.ts",
    },
  },
  test: {
    clearMocks: true,
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["json", "json-summary", "html", "lcov", "text"],
      reportOnFailure: true,
      exclude: [
        "src/client/core/**",
        "**/node_modules/**",
        "docs/assets/**",
        "tools",
        "dist",
        "coverage",
      ],
    },
  },
} satisfies UserConfig);
