/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tangled-purple': '#4E2A84', // Royal purple from Rapunzel's dress
        'tangled-lavender': '#8975B4', // Lighter purple for accents
        'tangled-green': '#1A8754', // Pascal's green
        'tangled-sage': '#5B8C5A', // Forest green
        'tangled-yellow': '#F9D780', // Sun/blonde hair color
        'tangled-gold': '#FDBB2D', // Lantern glow
        'tangled-brown': '#73462C', // Flynn's vest color
      },
      fontFamily: {
        'tangled': ['Gabriela', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 