/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media400' : "400px",
        'media470' : "470px",
        'media560' : "560px",
        'media1150' : "1150px",
        'media1200' : "1200px",
      },
    },
  },
  plugins: [],
};

