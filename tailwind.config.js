/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'border-glow': 'radial-gradient(gray-800, rgba(59,130,246,0.5) 40%, transparent 70%)',
      },
      animation: {
        'pulse-border': 'pulse-border 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-border': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
