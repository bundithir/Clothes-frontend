/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/1000x500.gif')",
        'card' : "url('./images/500x500.gif')" ,
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}