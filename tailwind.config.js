/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx",
  "./src/Components/*.{js,ts,jsx,tsx}",],
  darkMode: 'selector',
    
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
}

