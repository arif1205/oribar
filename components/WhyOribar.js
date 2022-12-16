import React from "react";
import MenuIcon from "../images/icons/menu.png";
import BarIcon from "../images/icons/bar.png";
import CoinIcon from "../images/icons/coin-stack.png";
import PieIcon from "../images/icons/pie-block.png";
import WhyOribarItem from "../utils/WhyOribarItem";
import Image from "next/image";
import WhyOribarStripes from "../images/img/why-oribar-right-desktop.png";
import WhyOribarStripesMobile from "../images/img/whyorigibar-top-mobile.png";

// why oribar items data
const woi = [
	{
		icon: MenuIcon,
		title: "Track diverse bills",
		des: "Your bill includes more than just credit card and mortgage payments. We makes it simple to integrate your heating, electricity, water, internet and more.",
		iconbg: "bg-[linear-gradient(180deg,#EF466F_0%,#DF446A_100%)]",
		id: 0,
	},
	{
		title: "no-item",
	},
	{
		icon: CoinIcon,
		title: "View your estimated monthly bill total",
		des: "Knowing how much of your income is expected to go toward bills will assist you in budgeting and spending wisely.",
		iconbg: "bg-[linear-gradient(180deg,#614FE1_0%,#5846DF_100%)]",
		id: 1,
	},
	{
		icon: BarIcon,
		title: "Set due date reminders",
		des: "Choose the date and time you want to be reminded of your bill ensuring you never miss a due date.",
		iconbg: "bg-[linear-gradient(180deg,#FD9124_0%,#E7821D_100%)]",
		id: 2,
	},
	{
		icon: PieIcon,
		title: "Integrate your financial institution",
		des: "With Oribar, you can integrate your credit, loan, and cash account. This is can be done manually or automatically through MX.",
		iconbg: "bg-[linear-gradient(180deg,#45B26B_0%,#3FA563_100%)]",
		id: 3,
	},
];

const WhyOribar = () => {
	return (
		<section className='py-4 sm:py-6 px-12 sm:px-[130px] pb-4 sm:pb-[240px] relative'>
			{/* header  */}
			<h1 className='font-[800] text-2xl sm:text-[48px] leading-8 sm:leading-[78px] text-dark-text text-center w-[100%] sm:w-[60%] mx-auto mb-12 sm:mb-4 relative z-10'>
				Why keep track of your bills with Oribar?
			</h1>
			{/* content  */}
			<div className='grid grid-cols-3 grid-rows-6 sm:grid-rows-2 sm:gap-x-[100px] gap-y-9 sm:gap-y-10 items-center'>
				{woi.map((v, i) => (
					<WhyOribarItem key={v.title} val={v} />
				))}
			</div>

			{/* top stripes bg  */}
			<div className='absolute right-0 -top-28 sm:-top-14'>
				<div className='sm:block hidden'>
					<Image src={WhyOribarStripes} alt='' />
				</div>
				<div className='sm:hidden'>
					<Image src={WhyOribarStripesMobile} alt='' />
				</div>
			</div>
		</section>
	);
};

export default WhyOribar;
