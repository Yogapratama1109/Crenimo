import React, { useState } from "react";

import "./ActiveCards.css";
import { Row, Col, Card } from "react-bootstrap";
import Buttons from "../Buttons/Buttons";

import PeopleIcons from "../../assets/icon/People-icon.png";
import Mascot from "../../assets/img/artworks-2.png";

function ActiveCards() {
	return (
		<section id="active-cards">
			<Card>
				<Card.Body className="p-4">
					<div className="card-content">
						<div className="card-description">
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
								and typesetting industry.Lorem Ipsum is simply
								dummy text of the printing and typesetting
								industry.
							</Card.Text>
						</div>

						<div className="card-img-vector">
							<img src={Mascot} alt="" />
						</div>

						<Buttons
							button={{
								title: "Play Now",
							}}
						/>
					</div>
				</Card.Body>
			</Card>

			{/* <Card>
				<Card.Body className="p-4">
					<div className="card-content">
						<div className="card-description">
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
								and typesetting industry.Lorem Ipsum is simply
								dummy text of the printing and typesetting
								industry.
							</Card.Text>

							<Buttons
								button={{
									title: "Play Now",
								}}
							/>
						</div>

						<div className="card-img-vector">
							<img src={Mascot} alt="" />
						</div>
					</div>
				</Card.Body>
			</Card> */}
		</section>
	);
}

export default ActiveCards;
