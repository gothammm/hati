/* eslint-disable no-undef */
import plugin from "tailwindcss/plugin";

const hatiTailwindPlugin = plugin(async ({ addComponents }) => {
  const { styles } = await import("./snapshot/styles");
  addComponents(styles);
});

export default hatiTailwindPlugin;
