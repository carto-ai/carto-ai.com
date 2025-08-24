import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://carto-ai.com",
  base: "/",

  integrations: [
    sitemap({
      // Optional extras:
      // entryLimit: 45000,             // split into multiple files when large
      // customPages: ['https://carto-ai.github.io/carto-ai.com/extra-url'],
      // filter: (page) => !page.includes('/draft'),
      // serialize: (item) => ({ ...item, changefreq: 'weekly', priority: 0.7 }),
    }),
  ],
});
