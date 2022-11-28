import Image from "next/image";
import React from "react";

const BenefitsItem = ({ title, des, icon, id }) => {
	return (
		<div className='col-span-2 sm:col-span-1 border border-black/20 rounded-2xl px-4 sm:px-8 py-5 bg-transparent hover:bg-white transition duration-250 cursor-pointer hover:shadow-[20px_24px_94px_0px_rgba(0,0,0,0.11)] hover:border-white'>
			{/* header  */}
			<div className='flex gap-3 sm:gap-2 mb-4 sm:mb-2 items-center'>
				<div className={`icon h-9 ${id === 1 ? "w-[4rem] sm:w-9" : "w-9"}`}>
					<Image src={icon} alt='Icon' />
				</div>
				<div className='title grow font-bold text-[18px] sm:text-xl'>
					{title}
				</div>
			</div>
			{/* des  */}
			<div className=''>
				<p className='text-[13px] sm:text-[15px] text-black/60'>{des}</p>
			</div>
		</div>
	);
};

export default BenefitsItem;
