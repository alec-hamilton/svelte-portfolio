/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				bg: "#E7E2D3",
			},
			fontFamily: {
				display: ["terminal"],
				body: ["aspekta"],
			},
		},
	},
	plugins: [],
};
