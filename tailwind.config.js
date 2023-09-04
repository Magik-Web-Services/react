/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'sm': '768px',
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1280px'},
      'lg': {'min': '1280px', 'max': '1440px'},
    },

  },
  plugins: [],
}

