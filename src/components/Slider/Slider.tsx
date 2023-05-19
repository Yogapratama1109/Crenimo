import React from "react";

import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";

function Slider(props) {
	return (
		<>
			<div className="item">
				<img src={props.brand} alt="" />
			</div>
		</>
	);
}

function SliderList(props) {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 576 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 2,
		},
	};

	return (
		<section id="slider">
			<Container>
				<Carousel
					responsive={responsive}
					infinite={true}
					arrows={false}
					showDots={false}
					className="owl-carousel owl-theme card-slider"
				>
					{props.Slider.map((sliders) => (
						<Slider key={sliders.id} brand={sliders.brand} />
					))}
				</Carousel>
			</Container>
		</section>
	);
}

export default SliderList;
