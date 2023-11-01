import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

const confProd = {
  output: "static",
  adapter: vercelStatic(),
};

const confPreview = {
  output: "server",
  adapter: vercel(),
};

// https://astro.build/config
export default defineConfig({
  ...(process.env.NODE_ENV === "production" ? confProd : confPreview),
  integrations: [tailwind()],
});
