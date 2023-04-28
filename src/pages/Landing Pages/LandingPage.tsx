import React from "react";

import NavBar from "../../components/Navbar/NavBar";
import Banner from "../../views/Banner/Banner";
import Benefit from "../../views/Benefit/Benefit";
import Product from "../../views/Product/Product";
import Portfolio from "../../views/Portfolio/Portfolio";
import OurClients from "../../views/Our Clients/OurClients";
import FooterApp from "../../components/Footer/FooterApp";

import Container from "react-bootstrap/Container";

function LandingPage() {
	return (
		<section id="landing-pages">
			<NavBar />

			<Container>
				<Banner />
				<Benefit />
				<Product />
				<Portfolio />
				<OurClients />
			</Container>

			<FooterApp />
		</section>
	);
}

export default LandingPage;
