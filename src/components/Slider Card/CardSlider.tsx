import React from "react";

import "./CardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Buttons from "../Buttons/Buttons";

import PeopleIcons from "../../assets/icon/People-icon.png";
import Mascot from "../../assets/img/artworks-2.png";

function CardSlider() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="product mb-5" id="products">
			<Card>
				<Carousel
					responsive={responsive}
					infinite={true}
					arrows={false}
					showDots={true}
					className="owl-carousel owl-theme card-slider"
				>
					<Card.Body className="p-4">
						<div className="card-content">
							<Card.Img
								variant="top"
								src={PeopleIcons}
								className="mb-3"
							/>

							<Card.Title className="mb-3">
								Game Ojek Online Interface
							</Card.Title>

							<Card.Text className="mb-3">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum is simply
								dummy text of the printing and typesetting
								industry.
							</Card.Text>

							<Buttons
								button={{
									title: "Play Now",
								}}
							/>
						</div>
						<div className="card-img">
							<img src={Mascot} />
						</div>
					</Card.Body>
					<Card.Body className="p-4">
						<div className="card-content">
							<Card.Img
								variant="top"
								src={PeopleIcons}
								className="mb-3"
							/>

							<Card.Title className="mb-3">
								Game Ojek Online Interface
							</Card.Title>

							<Card.Text className="mb-3">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum is simply
								dummy text of the printing and typesetting
								industry.
							</Card.Text>

							<Buttons
								button={{
									title: "Play Now",
								}}
							/>
						</div>
						<div className="card-img">
							<img src={Mascot} />
						</div>
					</Card.Body>
					<Card.Body className="p-4">
						<div className="card-content">
							<Card.Img
								variant="top"
								src={PeopleIcons}
								className="mb-3"
							/>

							<Card.Title className="mb-3">
								Game Ojek Online Interface
							</Card.Title>

							<Card.Text className="mb-3">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum is simply
								dummy text of the printing and typesetting
								industry.
							</Card.Text>

							<Buttons
								button={{
									title: "Play Now",
								}}
							/>
						</div>
						<div className="card-img">
							<img src={Mascot} />
						</div>
					</Card.Body>
				</Carousel>
			</Card>
		</section>
	);
}

export default CardSlider;
