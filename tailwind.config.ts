/** @type {import('tailwindcss').Config} */
// @ts-ignore
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: [
          "Rubik"
        ]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
