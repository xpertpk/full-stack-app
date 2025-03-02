/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", // Ensures Tailwind looks at HTML files as well
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};