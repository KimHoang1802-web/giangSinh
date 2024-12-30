/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'custom-pattern': "url('../img/bg-tet.jpg')",
        'custom-pattern2': "url('../img/bg-noel3.jpg')",
      },
      // 
      animation: {
        fadeIn: 'fadeIn 10s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      // 
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(20, end)',
        blink: 'blink 0.5s step-end infinite',
      },
      
      // phúc, lộc, thọ, khang
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 8.5s ease-out',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Font chữ đẹp
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}