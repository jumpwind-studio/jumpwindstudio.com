import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@solidjs/start/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    minify: false,
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      preset: "cloudflare-pages",
      minify: false,
      sourceMap: "inline",
      rollupConfig: {
        external: ["node:async_hooks"],
      },
    },
  },
});
