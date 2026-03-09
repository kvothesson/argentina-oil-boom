import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Para GitHub Pages: la app se sirve en https://<user>.github.io/argentina-oil-boom/
export default defineConfig({
  base: "/argentina-oil-boom/",
  plugins: [react()],
});
