/** @type {import('tailwindcss').Config} */


import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

      Mona: ["Mona", "sans-serif"],
      MonaBold: ["Mona-Bold", "sans-serif"],
      MonaSemiBold: ["Mona-SemiBold", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': '#5840BA',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "black":"#000000",
      "yellow":"#FCC067",
      "lightBlurbg":"#F2F0F9",
      "textSecondary":"#343436"

    },
    extend: {},
  },
  plugins: [],
}
)
