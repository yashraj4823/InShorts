/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl' : ' 0px 1px 8px #888888' ,
        '5xl' : '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); '
      },

      fontFamily: {
        customFont: ["Roboto", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

