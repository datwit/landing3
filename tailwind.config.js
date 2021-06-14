const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    enabled: false
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Numans': ['Numans', 'sans-serif']
      },
      colors:{
        primary: '#1e4158',
        secondary1:'#00baff',
        secondary2: '#e69c24',
        bggray: ' #eaebec'
      },
      screens:{
        'xs': '360px',
        ...defaultTheme.screens
      },
      padding:{
        '1/3': '25%',
        '1/35': '35%'
      },
      margin :{
        '1/3':'30%',
        '1/4': '20%'
      }
    },
  },
  variants: {
    extend: {opacity: ['disabled'],},
  },
  plugins: [],
}
