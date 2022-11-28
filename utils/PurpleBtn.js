import React from "react";

const PurpleBtn = ({ text, bg }) => {
	return (
		<button
			className={`text-white text-xs sm:text-base py-[9px] sm:py-3 px-6 sm:px-8 rounded-lg transition hover:bg-dark-purple cursor-pointer`}
			style={{ backgroundColor: bg }}>
			{text}
		</button>
	);
};

export default PurpleBtn;
