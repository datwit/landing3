const { isWithinInterval } = require('date-fns')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require ('tailwindcss/plugin')

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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    
    plugin(function({addComponents, theme}){
      const buttons = {
        '.btn': {         
          padding: '.5rem 1rem',
          'border-radius': '9999px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backgroundColor: theme('colors.secondary2'),
          color: 'white',
          fontWeight: '600',           
          '&:hover': {
            backgroundColor: theme('colors.primary'),
            borderColor: 'white',
            'transform': 'translateY(-3px)', 
            'transition': ' .7s ease-in'                              
          },          
        },
      }
    addComponents(buttons)  
    })
  ]
}
