/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        accent: '#6943FF',
        softPink: '#FF7EB6',
        textPrimary: '#E0E0E0',
        textSecondary: '#A5A5A5',
        highlight: '#FFD700',
        error: '#FF4F4F',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
