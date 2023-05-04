/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4318FF',
        'secondary-gray': '#707EAE',
        'background': '#F9F9F9',
      }
    },
  },
  plugins: [],
}

