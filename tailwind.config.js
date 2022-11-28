/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        imprint: "url('./src/assets/images/General/imprint.jpg')",
        partners: "url('./src/assets/images/General/klaviatur-dark.jpg')",
        contact: "url('./src/assets/images/General/contact.jpg')"
      }
    },
    colors: {
      mst_orange: '#ef7c04',
      mst_black: '#000000',
      mst_white: '#ffffff',
      mst_construction: '#cd7221',
      mst_gray: '#f7fafc',
    },
  },
}
