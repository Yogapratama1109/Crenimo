import TitleSection from "../../components/Title Section/TitleSection";
import CardSlider from "../../components/Slider Card/CardSlider";
import GameIcons from "../../assets/icon/Game-icon.png";
import Mascot from "../../assets/img/artworks-2.png";

function Product() {
	const cardsliders = [
		{
			id: 1,
			badge: GameIcons,
			title: "Game Ojek Online Interface",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			image: Mascot,
		},
		{
			id: 2,
			badge: GameIcons,
			title: "Game Ojek Online Interface",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			image: Mascot,
		},
		{
			id: 3,
			badge: GameIcons,
			title: "Game Ojek Online Interface",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			image: Mascot,
		},
	];

	return (
		<>
			<TitleSection
				section={{
					id: "products",
					title: "We’ve got What You Need",
					subtitle: "Our Product",
				}}
			/>
			<CardSlider cardSlider={cardsliders} />
		</>
	);
}

export default Product;
