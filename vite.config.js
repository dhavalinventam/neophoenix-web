// Note: Next.js does not use Vite to build. This configuration is provided for
// editor tooling and alias parity only.
import path from "node:path";

/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/assets": path.resolve(__dirname, "src/assets"),
    },
  },
};

export default config;
