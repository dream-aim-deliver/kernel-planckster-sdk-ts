import { defineConfig, UserConfig } from "vite";
import sdk from "vite-plugin-sdk";

export default defineConfig({
  plugins: [sdk()],
  build: {
    lib: {
      entry: "src/index.ts",
    },
  },
} satisfies UserConfig);
