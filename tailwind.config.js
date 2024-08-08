/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        yellow: "#F4D04E",
        gray: {
          950: "#111111",
          500: "#6B6B6B",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ['"Figtree"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: [
          "clamp(12px, 3vw, 14px)",
          {
            lineHeight: "1.5",
            letterSpacing: "0",
          },
        ],
        base: [
          "clamp(14px, 3vw, 16px)",
          {
            lineHeight: "1.5",
            letterSpacing: "0",
          },
        ],
        lg: [
          "clamp(20px, 3vw, 24px)",
          {
            lineHeight: "1.5",
            letterSpacing: "0",
          },
        ],
      },
      spacing: {
        50: "4px",
        100: "8px",
        150: "12px",
        200: "16px",
        250: "20px",
        300: "24px",
      },
      borderRadius: {
        lg: "10px",
        "2xl": "20px",
      },
      boxShadow: ({ theme }) => ({
        outer: `8px 8px 0 0 ${theme("colors.gray.950")}`,
      }),
    },
  },
  plugins: [],
};
