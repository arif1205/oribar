/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"light-purple": "#7879F1",
			"main-bg": "#F6F9FF",
			dark: "#0A142F",
			// white: "#FFFFFF",
			"header-purple-circle": "#7879F1",
		},
		extend: {},
	},
	plugins: [],
};
