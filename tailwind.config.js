const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const bp = require('./tailwind.bp.config.json')
const screens = {}
Object.keys(bp).forEach((key) => {
  screens[key] = bp[key] + 'px'
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: 'class', // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    screens: screens,
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: colors.amber
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
