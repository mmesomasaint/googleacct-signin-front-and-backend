/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        load: 'load 2s infinite',
        'slide-in-right': 'slide-in-right 0.5s ease-in-out',
        'slide-in-left': 'slide-in-left 0.5s ease-in-out',
      },
      keyframes: {
        load: {
          '0%': {
            transform: 'translateX(-1%)',
            width: '0%',
          },
          '50%': {
            transform: 'translateX(100%)',
            width: '40%',
          },
          '100%': {
            transform: 'translateX(100%)',
            width: '100%',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
