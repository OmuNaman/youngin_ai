import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/transcribe": {
        target: "http://localhost:5000", // Proxy to backend during development
        changeOrigin: true,
      },
    },
  },
});