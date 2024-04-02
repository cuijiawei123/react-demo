module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 50px rgb(0 0 0 / 10%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
