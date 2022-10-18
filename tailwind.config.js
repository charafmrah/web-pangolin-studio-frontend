/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D07A3B",
        secondary: "#2a3443",
        "secondary-dark": "#0e1217",
      },
    },
  },
  plugins: [],
};
