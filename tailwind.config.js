/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a0b2e',
        secondary: '#11071f',
        'text-primary': '#ffffff',
        'text-secondary': '#7127BA',
        'text-third': '#1877F2',
      },
      maxWidth: {
        'max-size': '1030px',
      },
      backgroundImage: {
        'about-gradient': "url('@/assets/images/gradients/about-gradient.png')",
        'about-ellipse': "url('@/assets/images/ellipse.png')",
      },
    },
  },
  plugins: [],
}
