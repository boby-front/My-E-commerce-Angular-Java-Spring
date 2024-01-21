/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        mont: ["montserrat"],
        pop: ["poppins"],
      },
      colors: {
        brownPrimary: ["#b88e2f"],
        brownLight: ["#fff3e3"],
      },
    },
  },
  plugins: [],
};
