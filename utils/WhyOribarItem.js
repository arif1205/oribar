import Image from "next/image";
import React from "react";
import Android from "../images/img/android-straight.png";
import AndroidMobile from "../images/img/android-straight.png";

const WhyOribarItem = ({ val }) => {
	const { icon, iconbg, title, des, id } = val;
	return (
		<>
			{title === "no-item" ? (
				<div className='row-span-2 row-start-3 sm:row-start-1 col-span-3 sm:col-span-1 sm:col-start-2'>
					<div className='img max-h-screen max-w-[250px] sm:max-w-full mx-auto'>
						<Image src={AndroidMobile} alt='I phone' />
					</div>
				</div>
			) : (
				<div
					className={`col-span-3 sm:col-span-1 bg-white py-7 px-5 rounded-[8px] shadow-[3px_10px_20px_rgba(41,41,42,0.1)] ${
						id < 2 ? "self-end" : "self-start"
					}`}>
					{/* icon  */}
					<div
						className={`icon ${iconbg} rounded-2xl h-[50px] w-[50px] flex justify-center items-center mx-auto mb-7`}>
						<Image src={icon} alt='icon' className='w-6 h-6' />
					</div>
					{/* title  */}
					<div className=''>
						<h2 className='font-bold text-base sm:text-[18px] leading-5 sm:leading-6 text-center mb-7'>
							{title}
						</h2>
					</div>
					{/* sub title  */}
					<div className='min-h-[100px] max-h-fit'>
						<p className='text-black text-xs sm:text-sm leading-[20px] sm:leading-6 text-center'>
							{des}
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default WhyOribarItem;
