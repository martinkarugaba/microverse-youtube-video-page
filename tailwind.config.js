/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
      },
      width: {
        'w-95': '95%',
      },
    },
  },
  plugins: [],
};
