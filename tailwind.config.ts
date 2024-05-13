import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      brightness: {
        25: '.25',
      },
      colors: {
        'dark': 'rgb(2 2 2)',
        'light': 'rgb(228 228 231)',
        'accent': 'rgb(154 52 18)',
        'off-dark':'rgb(24 24 27);',
        'off-light': 'rgb(255 255 255)'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
