const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      coolGray: colors.coolGray,
      red: colors.red
    }
  },
  variants: {},
  plugins: [],
};
