/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E1111',
        primary: '#00A3FF',
        silver: '#C0C0C0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 163, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 163, 255, 0.6), 0 0 30px rgba(0, 163, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
