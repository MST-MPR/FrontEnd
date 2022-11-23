/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        partners: "url('./src/assets/images/General/klaviatur-dark.jpg')",
        fullService: "url('./src/assets/images/General/beamer.jpg')"
      }
    },
    plugins: [plugin(function({addUtilities}) {
      addUtilities({
        ".my-rotate-y-180":{
          transform: "rotateY(180deg)"
        }
    })
    })],
    colors: {
      mst_orange: '#ef7c04',
      mst_black: '#000000',
      mst_white: '#ffffff',
      mst_construction: '#cd7221',
      mst_gray: '#f7fafc',
      mst_bg: '#eca36e',
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ]
    }
  },
  plugins: [],
}
