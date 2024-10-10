import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
server: {
    proxy: {
      '/api': 'https://toptachesapi.onrender.com/', // assuming backend is running on port 5000
    }
  }
});