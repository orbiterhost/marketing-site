/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				"spin-slowest":
					"spin-slowest 20s linear infinite, fade-in 0.5s ease-in 1.5s forwards",
				"spin-slow":
					"spin-slow 18s linear infinite, fade-in 0.5s ease-in 1s forwards",
				"spin-med":
					"spin-med 16s linear infinite, fade-in 0.5s ease-in 0.5s forwards",
				"spin-fast":
					"spin-fast 14s linear infinite, fade-in 0.5s ease-in 0s forwards",
				"fade-in": "fade-in 0.5s ease-in forwards",
			},
			keyframes: {
				"spin-slowest": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"spin-slow": {
					"0%": { transform: "rotate(90deg)" },
					"100%": { transform: "rotate(450deg)" },
				},
				"spin-med": {
					"0%": { transform: "rotate(180deg)" },
					"100%": { transform: "rotate(540deg)" },
				},
				"spin-fast": {
					"0%": { transform: "rotate(270deg)" },
					"100%": { transform: "rotate(630deg)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	plugins: [],
};
