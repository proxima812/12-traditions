import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	site: "https://12-traditions.github.io",
	base: "12-traditions",
	integrations: [tailwind()],
})
