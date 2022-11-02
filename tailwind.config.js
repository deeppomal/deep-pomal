/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'Sans-Serif'],
        'montserrat': ['Montserrat', 'Sans-Serif'] 
      },
    },
  },
  plugins: [],
}
