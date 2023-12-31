/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 50px 80px -35px rgba(0, 0, 0, 0.4)',
      },
      fontFamily:{
        'knewave' : ['Knewave','cursive']
      }
    },
  },
  plugins: [],
}