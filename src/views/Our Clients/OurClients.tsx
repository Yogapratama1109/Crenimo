import React from "react";

import TitleSection from "../../components/Title Section/TitleSection";
import Slider from "../../components/Slider/Slider";
import MRG from "../../assets/brand/mrg-logo.png";

function OurClients() {
	const Sliders = [
		{
			id: 1,
			brand: MRG,
		},
		{
			id: 2,
			brand: MRG,
		},
		{
			id: 3,
			brand: MRG,
		},
		{
			id: 4,
			brand: MRG,
		},
	];

	return (
		<section id="clients">
			<TitleSection
				section={{
					title: "Clients Who Trust Us",
					subtitle: "Clients",
				}}
			/>
			<Slider Slider={Sliders} />
		</section>
	);
}

export default OurClients;
