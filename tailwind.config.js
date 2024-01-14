/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    colors: {
      primary: "#5b6b46",
      "primary-light": "#aab29a",
      "primary-dark": "#223629",
      white: "#ffffff",
      black: "#000000",
      grey: "#e0e1db",
      "grey-light": "#f2f1ef",
      sale: "#f14242",
      error: "#db0000",
      warning: "#ff9616",
      success: "#4fac45",
    },
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [],
};
