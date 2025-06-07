/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        nord: {
          blue: "#1e293b",
          darkBlue: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};

