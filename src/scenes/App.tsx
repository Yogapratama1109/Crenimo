import { useState } from "react";

import "./App.css";
import Container from "react-bootstrap/Container";

import NavBar from "../components/Navbar/NavBar";
import HeaderApp from "../components/Header/HeaderApp";
import Cards from "../components/Card/Cards";
import TitleSection from "../components/Title Section/TitleSection";
import CardSlider from "../components/Slider Card/CardSlider";
import NavTabs from "../components/NavTabs/NavTabs";
import Slider from "../components/Slider/Slider";
import FooterApp from "../components/Footer/FooterApp";

function App() {
	return (
		<div className="App">
			<NavBar />

			<Container>
				<HeaderApp />
				<Cards />
				<TitleSection
					subtitle="Our Product"
					title="We’ve got What You Need"
				/>
				<CardSlider />
				<TitleSection
					subtitle="Portofolio"
					title="The Product from Our Experience"
				/>
				<NavTabs />
				<TitleSection subtitle="Clients" title="Clients Who Trust Us" />
				<Slider />
			</Container>

			<FooterApp />
		</div>
	);
}

export default App;
