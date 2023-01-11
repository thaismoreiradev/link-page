/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'xs': '375px',
      'sm': '600px',
      'md': '768px',
    },
 
    extend: {
       backgroundImage: {
        'mobilelightmode': "url('https://backgrounds-options.s3.sa-east-1.amazonaws.com/lightskymobile.jpg')",
        'mobiledarkmode': "url('https://backgrounds-options.s3.sa-east-1.amazonaws.com/darkskymobile.jpg')",
        'desktoplightmode': "url('https://backgrounds-options.s3.sa-east-1.amazonaws.com/lightskydesktop.jpg')",
        'desktopdarkmode': "url('https://backgrounds-options.s3.sa-east-1.amazonaws.com/darkskydesktop.jpg')"
      }
    },
  },
  plugins: [],
}
