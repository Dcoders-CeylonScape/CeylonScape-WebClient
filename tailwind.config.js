// tailwind.config.js

import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary_pri70: "#0F6795",
        primary_pri50: "#1EA0D9",
        primary_pri10: '#E2F2FC',
        secondary2: "#FDCEDF",
        secondary3: "#F2BED1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [flowbite.plugin()],
};
