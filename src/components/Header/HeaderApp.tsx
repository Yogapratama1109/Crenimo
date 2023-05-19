import "./HeaderApp.css";
import Buttons from "../Buttons/Buttons";

function HeaderApp(props) {
	return (
		<section className="header d-flex text-white" id={props.header.id}>
			<div className="header-text">
				<h6 className="mb-4">{props.header.subtitle}</h6>
				<h1 className="mb-4">{props.header.title}</h1>
				<h6 className="mb-4">{props.header.description}</h6>
				<Buttons
					button={{
						title: "Contact Us",
					}}
				/>
			</div>

			<div className="header-artworks d-flex justify-content-center">
				<img src={props.header.images} alt=""></img>
			</div>
		</section>
	);
}

export default HeaderApp;
