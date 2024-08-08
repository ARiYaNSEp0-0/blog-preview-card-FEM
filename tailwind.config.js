/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
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
        "14px",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
        },
      ],
      lg: [
        "24px",
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
    },
    extend: {},
  },
  plugins: [],
};
