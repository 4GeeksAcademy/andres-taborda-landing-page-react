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
					<Card 
						title={"Card 1"} 
						description={"Esto es una descripción de prueba"}
						image={"https://phantom-elmundo.unidadeditorial.es/ce1b13398c20f95888976b51b828e753/resize/1200/f/webp/assets/multimedia/imagenes/2023/06/16/16869010428768.jpg"}	
					/>
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
