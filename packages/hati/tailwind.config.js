/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import * as baseConfig from "../../tailwind.config";

module.exports = {
  ...baseConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
};
