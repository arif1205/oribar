import Image from "next/image";
import Link from "next/link";
import React from "react";
import PurpleBtn from "../utils/PurpleBtn";
import Mobile from "../images/img/two-android.png";
import BannerStripes from "../images/img/banner-before-desktop.png";
import BannerStripesMobile from "../images/img/banner-bg-mobile.png";
import MobileNoShadow from "../images/img/two-android-no-shadow.png";

const Banner = () => {
	return (
		<section className='banner sm:min-h-screen h-[752px] max-h-[500px] sm:max-h-[110vh] banner-bg-mobile sm:banner-bg relative'>
			{/* topbar */}
			<nav className='bg-transparent py-9 sm:py-[50px] px-7 sm:px-[60px]'>
				<Link href='/'>
					<h1 className='text-2xl font-poppins font-[600] text-light-purple cursor-pointer'>
						Oribar
					</h1>
				</Link>
			</nav>
			{/* banner content  */}
			<div className='py-[20px] sm:pt-[70px] pl-5 sm:pl-[105px] pr-8 max-w-full w-[700px] relative z-10'>
				<h1 className='font-[800] font-poppins text-[28px] sm:text-[64px] leading-[38px] sm:leading-[78px] text-dark-text mb-4'>
					Track your bills <br /> with Oribar
				</h1>
				<p className='text-sm sm:text-[21px] leading-6 sm:leading-8 mb-[27px] text-black'>
					With our app, you can quickly and easily track all of your bills in
					one place, so you always know where you stand financially.{" "}
				</p>
				{/* subscription */}
				<div className='subscription'>
					<p className='text-black mb-2 hidden sm:block'>
						Let’s notify you when Oribar launch in a few weeks{" "}
					</p>
					{/* email form */}
					<div className='flex gap-3 sm:gap-10'>
						<input
							type='email'
							className='grow py-3 px-3 sm:px-6 border-[0.5px] border-black/40 rounded-lg text-xs sm:text-base'
							placeholder='Email Address'
						/>
						{/* notified btn  */}
						<PurpleBtn text={"Get notified"} bg='#7879F1' />
					</div>
				</div>
			</div>
			{/* banner poster  */}
			<div className='absolute sm:right-[40px] sm:bottom-[40px] hidden sm:block h-[90%] z-20'>
				<Image src={Mobile} alt='Two android phone' />
			</div>
			<div className='absolute -bottom-[70%] left-1/2 -translate-x-1/2 w-[70%] h-[90%] z-20 sm:hidden'>
				<Image src={MobileNoShadow} alt='Two android phone' />
			</div>

			{/* banner right bottom bg  */}
			<div className='absolute right-0 bottom-32 sm:bottom-12'>
				<div className='sm:block hidden'>
					<Image src={BannerStripes} alt='' />
				</div>
				<div className='sm:hidden'>
					<Image src={BannerStripesMobile} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Banner;
