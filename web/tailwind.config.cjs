/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('./public/background-galaxy@3x.png')",
      },
    },
  },
  plugins: [],
};
