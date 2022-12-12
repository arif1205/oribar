import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='bg-dark pt-[50px] pb-[115px] px-6 sm:px-[210px] text-white'>
			<div className='grid grid-cols-4 grid-rows-3 gap-y-7 sm:gap-y-0'>
				{/* brand and copyright  */}
				<div className='col-span-4 sm:col-span-2 row-span-1 row-start-3 sm:row-start-1 sm:row-span-3 pt-5 sm:pt-0 border-t border-[#8E8E8E] sm:border-0'>
					<Link href='/' onClick={() => window.scrollTo(0, 0)}>
						<h1 className='text-3xl font-poppins font-[600] text-light-purple cursor-pointer mb-7 sm:mb-11'>
							Oribar
						</h1>
						<p className='text-[13px] text-white'>
							@2022 Oribar. All Right Reserved.
						</p>
					</Link>
				</div>
				{/* links  */}
				<div className='row-span-1 row-start-1 sm:row-span-3 sm:row-start-1 col-span-4 sm:col-span-1'>
					<h3 className='uppercase font-bold mb-4 text-sm sm:text-base'>
						company
					</h3>
					<div className='flex flex-col gap-2 sm:gap-4 text-white/80 text-[13px] sm:text-sm'>
						<Link
							href='https://www.oribar.com/privacy-policy'
							target={"_blank"}>
							<span className='hover:text-white transition'>Security</span>
						</Link>
						<Link href='https://www.oribar.com/FAQs' target={"_blank"}>
							<span className='hover:text-white transition'>FAQ&#39;s</span>
						</Link>
						<Link href='https://www.oribar.com/contact-us' target={"_blank"}>
							<span className='hover:text-white transition'>Contact Us</span>
						</Link>
					</div>
				</div>

				<div className='row-span-1 row-start-2 sm:row-span-3 sm:row-start-1 col-span-4 sm:col-span-1'>
					<h3 className='uppercase font-bold mb-4 text-sm sm:text-base'>
						Legal
					</h3>
					<div className='flex flex-col gap-2 sm:gap-4 text-white/80 text-[13px] sm:text-sm'>
						<Link
							href='https://www.oribar.com/privacy-policy'
							target={"_blank"}>
							<span className='hover:text-white transition'>
								Privacy Policy
							</span>
						</Link>
						<Link href='https://www.oribar.com/terms-of-use' target={"_blank"}>
							<span className='hover:text-white transition'>Terms of Use</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
