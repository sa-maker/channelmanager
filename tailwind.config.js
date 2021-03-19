module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    './tailwindUsedClasses.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
