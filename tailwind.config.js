/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../Alingo-Core-Lib/src/**/*.{js,ts,jsx,tsx}" // یہ لائن یقینی بنائے کہ موجود ہے
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
