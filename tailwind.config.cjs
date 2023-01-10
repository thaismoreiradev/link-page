/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'xs': '375px',
      'sm': '600px'
  },

      
    extend: {
       backgroundImage: {
        'mobilelightmode': "url('./public/mobilelightmode.jpg')",
        'mobiledarkmode': "url('./public/mobiledarkmode.jpg')",
        'desktoplightmode': "url('./public/desktoplightmode.jpg')",
        'desktopdarkmode': "url('./public/desktopdarkmode.jpg')"
      }

    },
  },
  plugins: [],
}
