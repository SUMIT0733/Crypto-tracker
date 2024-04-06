/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important: true,
  theme: {
    fontFamily: {
      sans: ["Roboto Mono, monospace"],
    },

    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      spacing: {
        13: "3.25rem",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
