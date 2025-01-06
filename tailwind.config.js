/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brick':'#B43737',
        'crimson':'#7F1F22'
      }
    },
  },
  plugins: [],
}
