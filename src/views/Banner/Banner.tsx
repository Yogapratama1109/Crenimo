import HeaderApp from "../../components/Header/HeaderApp";
import Artworks from "../../assets/img/artworks-1.png";
import Buttons from "../../components/Buttons/Buttons";

function Banner() {
	return (
		<>
			<HeaderApp
				header={{
					id: "home",
					title: "The Real-Time & Powerful 3D Design For Web Or Game Dev",
					subtitle: "3D Modeling & Game Dev",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
					images: Artworks,
				}}
			/>
		</>
	);
}

export default Banner;
