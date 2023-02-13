/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        partners: "url('././public/images/General/klaviatur-dark.jpg')",
        contact: "url('././public/images/General/contact.jpg')"
      }
    },
    colors: {
      mst_orange: '#ef7c04',
      mst_black: '#000000',
      mst_white: '#ffffff',
      mst_construction: '#cd7221',
      mst_gray: '#f7fafc',
      mst_error: '#b34f2f',
      mst_imprint: '#CBC9C7',
      mst_red:'#cc0000'
    },
  },
}
