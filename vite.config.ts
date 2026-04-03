import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Portfolio-Website/", // Uncomment if hosting at 'username.github.io/Portfolio-Website/'
});
