/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], //remove unused cssk
  darkMode: false, 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D07A3B',
        'secondary': '#2a3443',
        'secondary-dark': '#0e1217',
      }
    },
  },
  plugins: [],
}
