/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: "#0f0738",
        mainTxtColor: "#7760f7",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1028px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
