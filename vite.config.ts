/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      components: resolve(__dirname, "lib/components"),
      hati: resolve(__dirname, "hati-dist"),
    },
  },
});
