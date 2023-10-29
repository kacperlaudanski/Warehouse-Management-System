/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        secondary:{

        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
  ],
}