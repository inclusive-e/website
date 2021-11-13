module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        'd-primary-text': '#F4F3EA',
        'd-secondary-text': '#CBD6EC',
        'd-accent': '#4DEEE2',
        'd-background': '#0A1A2D',
        'd-button-background': '#3B4857',
        'd-button-text': '#CED1D5',
      }
    },
    fontFamily: {
      'primary': ['Heebo', 'sans-serif'],
      'secondary': ['Archivo', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
