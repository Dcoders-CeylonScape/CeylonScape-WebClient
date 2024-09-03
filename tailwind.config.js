/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              primary: '#3494da',
              secondary: '#F8E8EE',
              secondary2: '#FDCEDF',
              secondary3: '#F2BED1',
          },
      },
  },
  plugins: [],
}

