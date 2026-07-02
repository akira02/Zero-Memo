import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
  },
  plugins: [preact({ devToolsEnabled: false })],
});
