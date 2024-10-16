import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
import { data } from "../data/data";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container my-5 pt-4 " >
				<Jumbotron/>
				<section className="row gap-4 justify-content-around">
					{
						data.map(user => {
							const { first_name, id, email, avatar } = user							
							return	<Card 
													key={id}
													title={first_name} 
													description={email}
													image={avatar}	
											/>							
						})
					}
				</section>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
