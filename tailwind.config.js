/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050D1D',
          900: '#0A1F3D',
          800: '#12294E',
          700: '#1B3A68',
          100: '#D5E2F4',
          50: '#EDF2F9',
        },
        brand: {
          700: '#0A4FA3',
          600: '#0E63C6',
          500: '#1B87F0',
          100: '#CFE6FD',
          50: '#EFF6FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(10,31,51,0.18)',
        pop: '0 18px 50px -18px rgba(10,31,51,0.28)',
      },
    },
  },
  plugins: [],
}
