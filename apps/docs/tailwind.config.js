/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import * as baseConfig from "../../tailwind.config";
module.exports = {
  ...baseConfig,
  plugins: [require("tailwindcss-animate")],
  content: ["./index.html", "./src/**/*.{tsx,css,mdx}"],
};
