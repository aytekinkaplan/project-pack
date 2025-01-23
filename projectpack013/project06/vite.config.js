import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createMarkdownPlugin } from "vite-plugin-md";

export default defineConfig({
  plugins: [
    react(),
    createMarkdownPlugin(), // Markdown dosyalarını işler
  ],
  assetsInclude: ["**/*.md"],
});
