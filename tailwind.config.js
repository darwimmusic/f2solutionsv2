/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3D6F',
        'dark': '#1C1D20',
        'light-gray': '#C3C3C3',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
