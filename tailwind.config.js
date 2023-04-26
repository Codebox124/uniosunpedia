
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        sx: "250px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      zIndex: {
        "-one": "-1",
        two: "2",
      },
      colors: {
        primary: "#efefef",
        secondary: "#cfcfcf",
        links: "#1A1A1A",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};