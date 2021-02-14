const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    "./content/**/*.md",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      fontFamily:{
         'p': ['Roboto']
      },     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
