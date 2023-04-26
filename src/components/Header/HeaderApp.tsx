import React from "react";

import "./HeaderApp.css";
import Buttons from "../Buttons/Buttons";
import ArtworkHeader from "../../assets/img/artworks-1.png";

function HeaderApp() {
	return (
		<section
			className="header d-flex align-items-center text-white"
			id="home"
		>
			<div className="header-text">
				<h6 className="mb-4">3D Modeling & Game Dev</h6>
				<h1 className="mb-4">
					The Real-Time & Powerful 3D Design For Web Or Game Game Dev
				</h1>
				<h6 className="mb-4">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry.
				</h6>
				<Buttons
					button={{
						title: "Contact Us",
					}}
				/>
			</div>

			<div className="header-artworks">
				<img src={ArtworkHeader} alt=""></img>
			</div>
		</section>
	);
}

export default HeaderApp;
