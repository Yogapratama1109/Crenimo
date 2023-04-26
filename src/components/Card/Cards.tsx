import React from "react";

import "./Cards.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import PeopleIcons from "../../assets/icon/People-icon.png";

function Cards() {
	return (
		<Row style={{ minHeight: "60vh" }}>
			<Col md={12} lg={4} xl={4}>
				<Card className="p-3">
					<Card.Body className="p-3">
						<Card.Img
							variant="top"
							src={PeopleIcons}
							className="mb-3"
						/>

						<Card.Title className="mb-3">
							Experienced in Handling Many Clients
						</Card.Title>

						<Card.Text className="mb-3">
							We have made many products in collaboration with
							many clients in the manufacture of various IT
							products.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col md={12} lg={4} xl={4}>
				<Card className="p-3">
					<Card.Body className="p-3">
						<Card.Img
							variant="top"
							src={PeopleIcons}
							className="mb-3"
						/>

						<Card.Title className="mb-3">
							Fast Project Work
						</Card.Title>

						<Card.Text className="mb-3">
							Projects undertaken by us can be quickly completed
							with experienced designers and software engineers.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col md={12} lg={4} xl={4}>
				<Card className="p-3">
					<Card.Body className="p-3">
						<Card.Img
							variant="top"
							src={PeopleIcons}
							className="mb-3"
						/>

						<Card.Title className="mb-3">24/7 Support</Card.Title>

						<Card.Text className="mb-3">
							We are always ready to serve you anytime and
							anywhere. With our 24/7 support service, you can
							feel safe and comfortable, because our help is
							always available when you need it.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}

export default Cards;
