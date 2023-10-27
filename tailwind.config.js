/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {},
  plugins: [preline],
};
