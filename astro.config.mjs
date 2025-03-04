// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://orbiter.host",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast'
    }
  },
  build: {
    assetsPrefix: "./",
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), mdx(), sitemap()],
});
