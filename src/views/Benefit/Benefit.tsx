import React from "react";

import CardList from "../../components/Card/Cards";
import PeopleIcons from "../../assets/icon/People-icon.png";

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
			image: PeopleIcons,
			title: "Fast Project Work",
			description:
				"Projects undertaken by us can be quickly completed with experienced designers and software engineers.",
		},
		{
			id: 3,
			image: PeopleIcons,
			title: "24/7 Support ",
			description:
				"We are always ready to serve you anytime and anywhere. With our 24/7 support service, you can feel safe and comfortable, because our help is always available when you need it.",
		},
	];

	return (
		<>
			<CardList cards={cards} />
		</>
	);
}

export default Benefit;
