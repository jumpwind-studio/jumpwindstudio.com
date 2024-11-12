import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
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
