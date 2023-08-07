/* eslint-disable no-undef */
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import mdx from "@mdx-js/rollup";
import { default as rehype } from "@mapbox/rehype-prism";

export default defineConfig({
  plugins: [
    solidPlugin(),
    mdx({
      jsxImportSource: "solid-js/h",
      rehypePlugins: rehype as any,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
