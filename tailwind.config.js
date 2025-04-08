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
        'float-slow': 'float 15s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-particle': 'floatParticle 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatParticle: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-50px) translateX(20px)', opacity: '0' },
        },
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle, rgba(253,187,45,0.3) 0%, rgba(253,187,45,0) 70%)',
      },
    },
  },
  plugins: [],
} 