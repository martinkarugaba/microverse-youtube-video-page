/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'youtube-red': '#FF0000',
      },
      width: {
        'w-95': '95%',
      },
      fontSize: {
        8:"0.5rempx",
        20: '20px',
        22: '22px',
        24: '24px',
      },
      fontFamily: {
        logo: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
