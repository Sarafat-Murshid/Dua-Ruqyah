/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        // Add your custom fonts here
      },
      colors: {
        primary: '#1FA45B',
      }
    }
  },
  plugins: [require("daisyui")],
}
