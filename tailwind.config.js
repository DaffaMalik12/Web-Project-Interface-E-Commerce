/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend:
      {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'myFont': ['Mochiy Pop One', 'sans-serif']
        },
      },
    },
    plugins: [],
}