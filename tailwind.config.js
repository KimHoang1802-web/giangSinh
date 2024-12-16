/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'custom-pattern': "url('../img/bg-noel.jpg')",
        'custom-pattern2': "url('../img/bg-noel2.jpg')",
      },
      // 
      animation: {
        fadeIn: 'fadeIn 16s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      
      
      
      
    },
  },
  plugins: [require('flowbite/plugin')],
}