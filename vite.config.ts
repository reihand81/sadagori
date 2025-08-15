// path alias tanpa modul node
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/sadagori",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
