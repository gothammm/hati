/* eslint-disable no-undef */
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    solidPlugin(),
    mdx({
      jsxImportSource: "solid-js/h",
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
