/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Amabara ya DOMI-FASHION ahura neza n'ifoto wanyeretse
        domi: {
          gold: '#C5A059',
          dark: '#0A0E0F',
          green: '#0D1B1E',
        }
      },
    },
  },
  plugins: [],
}