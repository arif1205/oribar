import React from "react";
import BenefitsItem from "../utils/BenefitsItem";
import mobilePay from "../images/icons/mobile-payment.png";
import arrowup from "../images/icons/arrow-up.png";
import wallet from "../images/icons/wallet.png";
import cash from "../images/icons/cash.png";
import BenifitsTopStripes from "../images/img/benifit-top-desktop.png";
import BenifitsTopMobile from "../images/img/benifits-stripes-mobile.png";
import BenifitsBtmStripes from "../images/img/why-oribar-left.png";
import BenifitsBtmMobile from "../images/img/benifits-bottom-mobile.png";
import Image from "next/image";

const benifitsitems = [
	{
		title: "Pay all your bills on time",
		des: "You can avoid costly late fees by tracking your bills and knowing when they’re due. Plus, our handy reminders ensure that you never miss a payment.",
		icon: mobilePay,
	},
	{
		title: "Keep track of how your bill changes from month to month",
		des: "The amount you are billed each month may vary for a variety of reasons. Keeping track of your monthly bill changes will help you budget more effectively.",
		icon: arrowup,
	},
	{
		title: "Recognize where your money is going",
		des: "Tracking your bills can help you see where your money is being spent and why. It can also help you find ways to save money.",
		icon: wallet,
	},
	{
		title: "Prioritize your spending  ",
		des: "It helps you plan for upcoming expenses so you’re not caught off guard. Monitoring your bill each month is a simple and effective way to stay on top of your expenses.",
		icon: cash,
	},
];

const Benifits = () => {
	return (
		<section className='py-12 px-3 sm:px-[100px] pt-[373px] sm:pt-12 relative'>
			{/* header  */}
			<div className='pb-0 sm:pb-[50px] w-full sm:w-[75%] mx-auto'>
				<h1 className='font-[800] text-3xl sm:text-[48px] leading-8 sm:leading-[78px] text-dark-text mb-6 sm:mb-3 text-center'>
					Benefit of tracking your bills
				</h1>
				<p className='text-[13px] sm:text-[19px] leading-[21px] sm:leading-8 mb-[20px] sm:mb-[27px] text-center '>
					With multiple bills and subscription accounts, Oribar helps organize
					and make tracking your bills, interests and due dates easy.
				</p>
			</div>
			{/* content  */}
			<div className='grid gap-x-[100px] gap-y-5 sm:gap-y-[50px] grid-cols-[1fr_1fr] relative z-10'>
				{benifitsitems.map((v, i) => (
					<BenefitsItem
						key={v.title}
						icon={v.icon}
						title={v.title}
						des={v.des}
						id={i}
					/>
				))}
			</div>

			{/* top stripes bg  */}
			<div className='absolute left-0 -top-16 sm:-top-14'>
				<div className='sm:block hidden'>
					<Image src={BenifitsTopStripes} alt='' />
				</div>
				<div className='sm:hidden'>
					<Image src={BenifitsTopMobile} alt='' />
				</div>
			</div>

			{/* bottom stripes bg  */}
			<div className='absolute left-0 -bottom-28 sm:-bottom-14'>
				<div className='sm:block hidden'>
					<Image src={BenifitsBtmStripes} alt='' />
				</div>
				<div className='sm:hidden'>
					<Image src={BenifitsBtmMobile} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Benifits;
