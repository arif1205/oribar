import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Oribar - Track your bills</title>
			</Head>
			<Header />
		</div>
	);
};

export default Home;
