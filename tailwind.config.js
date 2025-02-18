 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter:  ["Inter", "serif"],
        Montserrat: ["Montserrat", "serif"],

      },
      colors: {
        primary: "#0057BC",
        secondary: "#016CE9",
        dark: "#00030B",
        100: "#222222",
      },
    },
  },
  plugins: [],
}