const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Sofia", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff5100",
        },
        secondary: {
          DEFAULT: "#1E75BA",
        },
        orange: {
          DEFAULT: "#faaf42",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "95vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "90vw",
          },
          "@screen xl": {
            maxWidth: "1750px",
          },
        },
      });
    },
  ],
};
