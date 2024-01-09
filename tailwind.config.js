/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
        dm: ["DM Sans"],
      },
      colors: {
        secBlack: "#262626",
        setGray: "#767676",
        borderColor: "#F0F0F0",
      },
      maxWidth: {
        container: "1600px",
      },
    },
  },
  plugins: [],
};
