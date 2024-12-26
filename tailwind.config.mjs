/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-img": "url(./assets/hero.jpg)",
			},
			animation: {
				"spin-slowest":
					"spin-slowest 20s linear infinite, fade-in 0.5s ease-in 1.5s forwards",
				"spin-slow":
					"spin-slow 18s linear infinite, fade-in 0.5s ease-in 1s forwards",
				"spin-med":
					"spin-med 16s linear infinite, fade-in 0.5s ease-in 0.5s forwards",
				"spin-fast":
					"spin-fast 14s linear infinite, fade-in 0.5s ease-in 0s forwards",
				"spin-icon": "spin-icon 10s linear infinite",
				"fade-in": "fade-in 0.5s ease-in forwards",
			},
			keyframes: {
				"spin-slowest": {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				"spin-slow": {
					"0%": {
						transform: "rotate(90deg)",
					},
					"100%": {
						transform: "rotate(450deg)",
					},
				},
				"spin-med": {
					"0%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(540deg)",
					},
				},
				"spin-fast": {
					"0%": {
						transform: "rotate(270deg)",
					},
					"100%": {
						transform: "rotate(630deg)",
					},
				},
				"spin-icon": {
					"0%": {
						transform: "rotate(90deg)",
					},
					"100%": {
						transform: "rotate(450deg)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
