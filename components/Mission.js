import Image from "next/image";
import React from "react";
import Reminder from "../images/img/set-reminder.png";
import ReminderMobile from "../images/img/mission-sm.png";
import PurpleBtn from "../utils/PurpleBtn";
import MissionStripes from "../images/img/mission-bg-desktop.png";

const Mission = () => {
	return (
		<section className='bg-white py-14 sm:py-7 px-[32px] sm:px-[100px] pb-[75px] sm:pb-32 relative'>
			<div className='grid grid-cols-5 gap-y-14 sm:gap-y-0'>
				{/* text  */}
				<div className='col-span-5 sm:col-span-3 self-center sm:pr-40'>
					<h1 className='text-2xl sm:text-3xl font-[800] leading-[42px] mb-9 text-dark'>
						Our Mission
					</h1>
					<p className='text-sm sm:text-xl leading-6 sm:leading-10 text-black'>
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

				<div className='col-span-5 sm:col-span-2'>
					<div className='hidden sm:block'>
						<Image src={Reminder} alt='Android phone' />
					</div>
					<div className='sm:hidden'>
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
