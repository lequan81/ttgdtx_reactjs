/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      {
        find: "@hook",
        replacement: path.resolve(__dirname, "src/hook"),
      },
      {
        find: "@data",
        replacement: path.resolve(__dirname, "src/data"),
      },
      {
        find: "@routes",
        replacement: path.resolve(__dirname, "src/routes"),
      },
    ],
  },
});
