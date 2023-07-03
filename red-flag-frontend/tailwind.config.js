/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        azul: '#001D3D'
      }
    },
    fontFamily:{
      rubik: ['Rubik Vinyl'],
      titan: ['Titan One'],
      oleo: ['Oleo Script'],
      vadodara: ['Hind Vadodara'],
    },
  },
  plugins: [],
}
