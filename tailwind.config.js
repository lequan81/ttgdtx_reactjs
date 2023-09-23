/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        "faded-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "faded-in": "faded-in 0.5s ease-out",
      },
    },
  },
  plugins: [preline],
};
