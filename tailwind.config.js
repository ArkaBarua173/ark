/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "8rem",
        lg: "4rem",
        xl: "10rem",
        "2xl": "14rem",
      },
    },
  },
  plugins: [],
};
