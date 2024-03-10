/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', 'sans'],
        Madimi : ["Madimi One", 'sans-serif'],
        Pacifico : ["Pacifico", 'cursive']
      },
      backgroundColor: {
        'custom': 'rgb(40, 41, 42)',
        'dark': 'rgb(32, 33, 37)',
        'primary': '#002244',
      },

    },
  },
  plugins: [],
}