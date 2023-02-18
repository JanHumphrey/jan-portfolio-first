/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'hero': ['Changa One', 'sans-serif'],
      'hero2':['Jost', 'sans-serif'],
      'main':['Roboto Mono', 'sans-serif'],
      'main2':['Poppins', 'sans-serif'],
      
    }
    },
    plugins: [],
  }
