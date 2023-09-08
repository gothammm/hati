import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { hatiCss } from "./src/plugin/hati-css-js";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    {
      name: "hati-css",
      enforce: "pre",
      async buildStart() {
        console.log("Build Started");
        await hatiCss({
          entry: "./src/index.css",
          out: "./src/plugin/snapshot/styles.js",
        });
      },
    },
    solidPlugin(),
    dts({ insertTypesEntry: true, exclude: ["./*.config.{ts,js}"] }),
  ],
  build: {
    outDir: "./dist",
    lib: {
      entry: {
        hati: "./src/index.ts",
        plugin: "./src/plugin/hati-tailwind.js",
      },
      formats: ["cjs", "es"],
    },
  },
});
