module.exports = {
  // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "d-primary-text": "#F4F3EA",
        "d-secondary-text": "#CBD6EC",
        "d-accent": "#4DEEE2",
        "d-background": "#0A1A2D",
        "d-button-background": "#3B4857",
        "d-button-text": "#CED1D5",
      },
      borderWidth: {
        3: "3px",
      },
      outline: {
        accent: "3px solid #4DEEE2",
      },
    },
    fontFamily: {
      primary: ["Heebo", "sans-serif"],
      secondary: ["Archivo", "sans-serif"],
    },
    fontSize: {
      tiny: "16px",
      base: "18px",
      xl: "20px",
      heading: "34px",
      "heading-md": "48px",
      "heading-xl": "54px",
      "sub-heading": "26px",
      "sub-heading-md": "32px",
      "sub-heading-xl": "36px",
    },
  },
  variants: {
    extend: {
      outline: ["hover"],
    },
  },
  plugins: [],
}
