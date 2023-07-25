import { defineConfig } from "tsup";
import * as preset from "tsup-preset-solid";

const presetOptions: preset.PresetOptions = {
  entries: [
    {
      entry: "lib/index.tsx",
      dev_entry: false,
    },
  ],
  drop_console: true,
  cjs: true,
};
export default defineConfig((config) => {
  const watching = !!config.watch;

  const parsedData = preset.parsePresetOptions(presetOptions, watching);
  return preset.generateTsupOptions(parsedData);
});
