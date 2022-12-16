import Image from "next/image";
import React from "react";
import Reminder from "../images/img/set-reminder.png";
import ReminderMobile from "../images/img/set-reminder-no-shadow.png";
import PurpleBtn from "../utils/PurpleBtn";
import MissionStripes from "../images/img/mission-bg-desktop.png";

const Mission = () => {
	return (
		<section className='bg-white py-14 sm:py-7 px-[32px] sm:px-[100px] pb-[60px] sm:pb-5 relative'>
			<div className='grid grid-cols-6 gap-y-10 sm:gap-y-0'>
				{/* text  */}
				<div className='col-span-6 sm:col-span-4 self-start sm:pt-16 sm:pr-20'>
					<h1 className='text-2xl sm:text-3xl font-[800] leading-[42px] mb-9 text-dark'>
						Our Mission
					</h1>
					<p className='text-sm sm:text-xl leading-6 sm:leading-10 text-black relative z-20'>
						We&#39;ve made it our mission to manage your bill reminders. With
						the stress of adulting, our tools make it possible to automatically
						add your bills, from your mortgage to your Netflix subscription to
						your water bill. We allow you to schedule reminders from the day
						your bill is posted to the day before it is due.
					</p>
					<div className='pt-7 sm:hidden'>
						<PurpleBtn text={"Get Started"} bg='#5846DF' />
					</div>
				</div>

				<div className='col-span-6 sm:col-span-2 justify-self-center'>
					<div className='hidden sm:block w-[75%]'>
						<Image src={Reminder} alt='Android phone' />
					</div>
					<div className='sm:hidden mx-auto'>
						<Image src={ReminderMobile} alt='Android phone' />
					</div>
				</div>
			</div>

			{/* top stripes bg  */}
			<div className='absolute left-0 bottom-14 hidden sm:block'>
				<Image src={MissionStripes} alt='' />
			</div>
		</section>
	);
};

export default Mission;
