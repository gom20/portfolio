// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'depth': 'depth 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255,255,255,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255,255,255,0.6)' },
        },
        depth: {
          '0%, 100%': { transform: 'translateZ(0px)' },
          '50%': { transform: 'translateZ(30px)' },
        }
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      }
    }
  },
  plugins: []
}
