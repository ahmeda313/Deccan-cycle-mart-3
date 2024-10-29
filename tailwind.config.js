/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          DEFAULT: '#FBBF24', // yellow-400
          hover: '#F59E0B', // yellow-500
        },
        secondary: {
          DEFAULT: '#1E40AF', // blue-800
          hover: '#1E3A8A', // blue-900
        }
      }
    },
  },
  plugins: [],
};