import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsDir: "./assets",
    copyPublicDir: false,
    emptyOutDir: true,
    outDir: "./dist",
    sourcemap: true,
  },
});
