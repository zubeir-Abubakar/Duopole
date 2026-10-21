/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#176B45',
        'primary-dark': '#104B32',
        accent: '#A7C957',
        botanical: '#EEF6EF',
        charcoal: '#24332B',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

