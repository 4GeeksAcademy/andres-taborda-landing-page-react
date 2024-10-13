import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container my-5 pt-4 " >
				<Jumbotron/>
				<section className="row gap-4 justify-content-around">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</section>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
