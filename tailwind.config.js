/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/src/assets/bg-1.png')",
        "large-bg": "url('/src/assets/bg-1-lg.png')",
        "medium-bg": "url('/src/assets/bg-1-md.png')",
        "small-bg": "url('/src/assets/bg-1-sm.png')",
      },
    },
  },
  plugins: [],
};
