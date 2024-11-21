/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx",
  "./src/Components/*.{js,ts,jsx,tsx}",
  "./src/Components/Pages/*.{js,ts,jsx,tsx}"],
  darkMode: ['selector', "class"],
  plugins: [require("tw-elements/plugin.cjs"),require('@tailwindcss/forms'), require("tailwindcss-animate")],
  safelist: [
    "bg-violet-600",
    "rounded",
    "px-8",
     "py-3",
     "text-lg",
     "font-semibold",
      "h-max rounded",
      "m-auto",
      "bg-green-600",
      "p-1",
      "p-2"
  ]
}

