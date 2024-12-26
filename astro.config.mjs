// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	output: "static",
	trailingSlash: "never",
	build: {
		assetsPrefix: "./",
		format: "file",
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
});
