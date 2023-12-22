/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      transitionTimingFunction: {
        customCubic: "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  plugins: [],
};
