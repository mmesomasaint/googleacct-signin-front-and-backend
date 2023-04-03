/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        load: 'load 2s infinite',
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
      },
    },
  },
  plugins: [],
};

