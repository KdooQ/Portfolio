import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" = rutas relativas: funciona igual en
// https://USUARIO.github.io/, en https://USUARIO.github.io/REPO/ y con dominio propio.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
