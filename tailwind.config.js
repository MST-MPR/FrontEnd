/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        überUns: "url('./src/assets/images/esc.jpg')",
        marco: "'(../../assets/images/Team/marco.jpg)'"
      }
    },
    colors: {
      mst_orange: '#ef7c04',
      mst_black: '#000000',
      mst_white: '#ffffff',
      mst_construction: '#36443B',
      mst_gray: '#f7fafc',
      mst_bg: '#eca36e'
    },
  },
  plugins: [],
}
