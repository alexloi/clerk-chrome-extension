/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        brandDark: "#2B2C4D",
        brandLight: "#94a3b8",
        brandAccentBlue: "#0033FF",
        brandAccentPurple: "#8F00FF",
      },
    },
  },
  plugins: [],
};
