import type { Config } from "tailwindcss"
import headlessui from "@headlessui/tailwindcss"

export default {
  content: ["./src/**/*.{tsx,astro}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [headlessui],
} satisfies Config
