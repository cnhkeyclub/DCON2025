/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tangled: {
          gold: '#FEF194',
          yellow: '#FFF5AC',
          green: '#436138',
          sage: '#5C8157',
          purple: '#9560AC',
          lavender: '#EDC2F6',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      fontFamily: {
        'tangled': ['Tangerine', 'cursive'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'lantern-pattern': "url('/src/assets/images/lantern-pattern.png')",
      },
    },
  },
  plugins: [],
} 