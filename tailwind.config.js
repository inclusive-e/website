module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        'primary': '#F4F3EA',
        'secondary': '#CBD6EC',
        'accent': '#4DEEE2',
        'background': '#0A1A2D',
        'btn-background': '#3B4857',
        'btn-color': '#CED1D5'
      }
    },
    fontFamily: {
      'primary': ['Heebo'],
      'secondary': ['Archivo']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
