import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/public/apple-clone/",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "youssof-antar",
      project: "apple-website",
      release: {
        name: "apple-website",
      },
      telemetry: false,
    }),
  ],
  build: {
    sourcemap: true,
  },
});
