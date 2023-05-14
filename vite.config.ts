/* eslint-disable no-undef */
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: "dist",
    target: "esnext",
  },
});
