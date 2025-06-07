/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './docs/*.html', 
  ],

  theme: {
    extend: {
      colors: {
        'gray-100': '#161b22',
        'gray-200': '#0d1117',
        'sky-blue-100': '#68afd5',
      },

      fontFamily: {
        'mona': ['"Mona Sans"', fontFamily.sans],
        'hubot': ['"Hubot Sans"', fontFamily.sans],
      },
      screens: {
        'xs': '486px'
      }
    },
  },
}


