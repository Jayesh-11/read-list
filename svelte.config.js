/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html",
      pages: "dist",
      assets: "dist",
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;
