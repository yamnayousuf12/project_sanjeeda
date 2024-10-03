/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    // "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00838F',
        darkBlue: '#060b2d',
        TealBlue: '#004D60',
       
      },
    },
  },
  plugins: [],
}

