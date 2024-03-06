/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#FFACC2',
        'primary-skyblue': '#DAE5FF',
        'primary-yellow': '#FFEB4D',
        'primary-darkred': '#9A2D2F'
      }
    },
  },
  plugins: [],
}