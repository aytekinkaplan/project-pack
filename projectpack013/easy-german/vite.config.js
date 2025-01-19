// File: vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (!id.endsWith(".md")) return null;

        // Frontmatter ve içeriği ayır
        const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
        const match = code.match(frontmatterRegex);
        let metadata = {};
        let content = code;

        if (match) {
          const frontmatter = match[1];
          content = code.slice(match[0].length);

          // YAML frontmatter'ı parse et
          metadata = frontmatter.split("\n").reduce((acc, line) => {
            const [key, ...value] = line.split(":");
            if (key && value.length) {
              acc[key.trim()] = value.join(":").trim();
            }
            return acc;
          }, {});
        }

        return {
          code: `export default {
            metadata: ${JSON.stringify(metadata)},
            content: ${JSON.stringify(content)}
          }`,
        };
      },
    },
  ],
});
