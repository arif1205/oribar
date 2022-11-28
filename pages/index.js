import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import Benifits from "../components/Benifits";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import WhyOribar from "../components/WhyOribar";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Oribar - Track your bills</title>
			</Head>
			<Banner />
			<main className='bg-main-bg'>
				<Benifits />
				<WhyOribar />
			</main>
			<Mission />
			<Footer />
		</div>
	);
};

export default Home;
