/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF8E7',
          100: '#FFECC4',
          200: '#FFD885',
          300: '#FFC347',
          400: '#FFB319',
          500: '#D4AF37',
          600: '#B8952E',
          700: '#997C27',
          800: '#7A6320',
          900: '#5C4A19',
        },
      },
    },
  },
  plugins: [],
}
