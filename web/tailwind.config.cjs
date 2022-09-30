/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'game-gradient': ' linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 80%);',
        'nlw-gradient':'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%);',
        galaxy : "url('/background-galaxy.png')"
      }
    },
  },
  plugins: [],
}
