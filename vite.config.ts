import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative assets and hash routes work under any GitHub Pages repository name.
  base: "./",
});
