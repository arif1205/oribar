/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
				poppins: "'Poppins', sans-serif",
			},
			colors: {
				"light-purple": "#7879F1",
				"deep-light-purple": "#5846DF",
				"dark-purple": "#3232AE",
				"main-bg": "#F6F9FF",
				dark: "#0A142F",
				"dark-text": "#18191F",
				"header-purple-circle": "#7879F1",
			},
		},
	},
	plugins: [],
};
