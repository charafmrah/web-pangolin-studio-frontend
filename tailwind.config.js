/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#D07A3B",
        secondary: "#2a3443",
        "secondary-dark": "#0e1217",
      },
    },
  },
  plugins: [],
};
