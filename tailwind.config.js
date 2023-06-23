/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-grey': '#f5f6fa',
        'off-white': '#fafafa',
        'primary-blue': '#0290ff',
        'text-color': '#121212',
        'light-blue': '#4386bf',
      },
      fontFamily: {
        montserat: ['Montserrat', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
