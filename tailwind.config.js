/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '-1px 5px 26px -9px rgba(201, 59, 118, 1)',
      },
      fontSize: {
        '2xs': '16px',   // Custom extra-small size
        '3xl': '1.875rem',   // Custom extra-large size
        'xxs':'10px'
      },
      colors: {
        'primary': 'rgba(201, 59, 118, 1)',
        'secondary': 'rgba(77, 85, 98, 1)',
        'important_txt': 'rgba(229, 231, 235, 1)',
        'background': 'rgba(18, 24, 38, 0.650980392)',
        'discreption': 'rgba(33, 41, 54, 0.8)',
      },
     
    },
  },
  plugins: [],
}
