/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

