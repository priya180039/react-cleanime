/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/src/assets/bg-1.png')",
      },
    },
  },
  plugins: [],
};
