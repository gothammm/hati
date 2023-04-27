import { defineConfig } from "vite";
import { resolve } from "path";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      skipDiagnostics: true,
      include: ["lib/components/"],
    }),
  ],
  build: {
    outDir: "hati-dist",
    lib: {
      entry: resolve("lib", "index.ts"),
      name: "Hati",
      fileName: "hati.js",
    },
    rollupOptions: {
      external: ["solid-js"],
    },
  },
});
