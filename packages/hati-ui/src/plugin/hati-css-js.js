/* eslint-disable no-undef */
import postcss from "postcss";
import fs from "node:fs/promises";
import postcssJs from "postcss-js";
import tailwind from "tailwindcss";
import hatiTailwindConfig from "../../tailwind.config";

export const hatiCss = async ({ entry, out }) => {
  const css = await fs.readFile(entry);
  const result = await postcss([
    require("postcss-import"),
    require("tailwindcss/nesting"),
    tailwind(hatiTailwindConfig),
    require("autoprefixer"),
  ]).process(css, {
    from: entry,
    to: out,
  });

  fs.writeFile(
    out,
    `/* eslint-disable no-undef */ \nexport const styles = ${JSON.stringify(
      postcssJs.objectify(result.root)
    )};`
  );
};
