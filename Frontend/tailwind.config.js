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
          blue: "#2563eb",
          bg: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
};

