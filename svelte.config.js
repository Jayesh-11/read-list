/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    paths: {
      base: "read-list",
    },
  },
};

export default config;
