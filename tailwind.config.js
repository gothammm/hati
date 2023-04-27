/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
    "./app/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
