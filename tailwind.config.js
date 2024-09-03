/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              primary_pri70: '#0F6795',
              primary_pri50: '#1EA0D9',
              secondary2: '#FDCEDF',
              secondary3: '#F2BED1',
          },
          fontFamily: {
              poppins: ['Poppins', 'sans-serif'],
          },
          fontWeight: {
              regular: 400,
              medium: 500,
              semibold: 600,
              bold: 700,
          },
      },
  },
  plugins: [],
}

