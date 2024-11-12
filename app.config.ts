import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    minify: false,
  },
  vite: {
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
