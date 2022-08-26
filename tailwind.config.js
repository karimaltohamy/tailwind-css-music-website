/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'one': '0px 3px 8px #090f1f'
      },
      fontFamily: {
        'poppins': "Poppins",
      },
      colors:{
        'main-color': "#36e2ec"
      }
    },
  },
  plugins: [],
}
