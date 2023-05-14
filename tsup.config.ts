import { defineConfig } from "tsup-preset-solid";

export default defineConfig(
  {
    entry: "lib/index.ts",
    devEntry: false,
  },
  {
    // Enable this to write export conditions to package.json
    writePackageJson: true,
    dropConsole: true,
    cjs: true,
    tsupOptions: (options) => {
      options.outDir = "hati-dist";
      return options;
    },
  },
);
