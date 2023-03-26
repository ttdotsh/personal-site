/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,astro}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@headlessui/tailwindcss")],
}
