import "./Product.css";
import TitleSection from "../../components/Title Section/TitleSection";
import CardSlider from "../../components/Slider Card/CardSlider";
import GameIcons from "../../assets/icon/Game-icon.png";
import Mascot from "../../assets/img/artworks-2.png";
import BlurEffect from "../../components/Blur Effect/BlurEffect";

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
		<section id="products">
			<BlurEffect />
			<TitleSection
				section={{
					title: "We’ve got What You Need",
					subtitle: "Our Product",
				}}
			/>
			<CardSlider cardSlider={cardsliders} />
		</section>
	);
}

export default Product;
