/** @type {import('tailwindcss').Config} */
export default {
	content: ["./**/*.{html,js}"],
	screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Barlow Semi Condensed", "san-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
