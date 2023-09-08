/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import * as baseConfig from "../../tailwind.config";

module.exports = {
  ...baseConfig,
  plugins: [require("tailwindcss-animate"), require("hati-ui/plugin")],
  content: ["./index.html", "./src/**/*.{tsx,css,mdx}"],
};
