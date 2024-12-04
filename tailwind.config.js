/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C1250',
        secondary: '#7127BA',
        text: '#ffffff',
        social: '#1877F2',
        header: '#1A0B2E',
      },
    },
  },
  plugins: [],
}
