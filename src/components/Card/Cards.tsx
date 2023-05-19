import "./Cards.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
	return (
		<Col md={12} lg={4} xl={4}>
			<Card className="p-3">
				<Card.Body className="p-3">
					<Card.Img
						variant="top"
						src={props.image}
						alt=""
						className={props.id}
					/>

					<Card.Title className="mb-3">{props.title}</Card.Title>

					<Card.Text className="mb-3">{props.description}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

function CardList(props) {
	return (
		<Row style={{ minHeight: "60vh" }}>
			{props.cards.map((card) => (
				<CardComponent
					key={card.id}
					id={card.id}
					image={card.image}
					title={card.title}
					description={card.description}
				/>
			))}
		</Row>
	);
}

export default CardList;
