module.exports = {
  plugins: [
    require('postcss-nested'), // <-- This should come before Tailwind
    require('tailwindcss'),
    autoprefixer, {},
  ],
  }
