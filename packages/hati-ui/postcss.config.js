/* eslint-disable no-undef */
module.exports = {
  // purge: ["./src/components/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
