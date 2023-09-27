import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          myChunk1: [
            "@emailjs/browser",
            "@react-three/drei",
            "@react-three/fiber",
            "framer-motion",
          ],
          myChunk2: [
            "maath",
            "react",
            "react-dom",
            "react-parallax-tilt",
            "react-router-dom",
            "react-vertical-timeline-component",
            "react-window",
            "three",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Set your preferred limit in kilobytes
    outDir: 'D:\Users\pasid\Desktop\Website-Portfolio-React-3js',
  },
});
