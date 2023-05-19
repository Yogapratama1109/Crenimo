import React from "react";

import "./Benefit.css";
import CardList from "../../components/Card/Cards";
import PeopleIcons from "../../assets/icon/24-hours-support.png";
import ClockIcons from "../../assets/icon/fast-time.png";
import ServicesIcons from "../../assets/icon/24-hours-support.png";

function Benefit() {
	const cards = [
		{
			id: 1,
			image: PeopleIcons,
			title: "Experienced in Handling Many Clients",
			description:
				"We have made many products in collaboration with many clients in the manufacture of various IT products.",
		},
		{
			id: 2,
			image: ClockIcons,
			title: "Fast Project Work",
			description:
				"Projects undertaken by us can be quickly completed with experienced designers and software engineers.",
		},
		{
			id: 3,
			image: ServicesIcons,
			title: "24/7 Support ",
			description:
				"We are always ready to serve you anytime and anywhere. With our 24/7 support service, you can feel safe and comfortable, because our help is always available when you need it.",
		},
	];

	return (
		<section id="benefit">
			<CardList cards={cards} />
		</section>
	);
}

export default Benefit;
