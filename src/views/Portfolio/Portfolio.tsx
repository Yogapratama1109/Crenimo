import "./Portfolio.css";
import TitleSection from "../../components/Title Section/TitleSection";
import { Tab, Nav } from "react-bootstrap";

import { Row, Col, Card, Stack } from "react-bootstrap";
import Buttons from "../../components/Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

import GameIcons from "../../assets/icon/Game-icon.png";
import Mascot from "../../assets/img/artworks-2.png";

function Portfolio() {
	return (
		<>
			<TitleSection
				section={{
					id: "portfolios",
					title: "The Product from Our Experience",
					subtitle: "Portfolio",
				}}
			/>

			<section id="portfolio">
				<Tab.Container
					id="portofolios-tabs"
					defaultActiveKey="game-dev"
				>
					<Nav
						variant="pills"
						id="pills-tab"
						className="d-flex justify-content-center"
					>
						<Nav.Item>
							<Nav.Link eventKey="game-dev">Game Dev</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="3d-design">3D Design</Nav.Link>
						</Nav.Item>
					</Nav>
					<Tab.Content>
						<Tab.Pane eventKey="game-dev" className="mt-5">
							<GameDevCards />
						</Tab.Pane>
						<Tab.Pane eventKey="3d-design" className="mt-5">
							<GameDevCards />
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
			</section>
		</>
	);
}

function GameDevCards() {
	return (
		<div className="wrapper-card d-flex justify-content-center gap-3">
			<div className="card p-4">
				<div className="card-content">
					<Card.Img variant="top" src={GameIcons} className="mb-3" />

					<Card.Title className="mb-3">
						Game Ojek Online Interface
					</Card.Title>

					<Card.Text className="mb-3">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum is simply dummy text
						of the printing and typesetting industry.
					</Card.Text>
				</div>

				<div className="btn-portfolio">
					<a href="#">
						Play Now
						<FontAwesomeIcon icon={faLongArrowRight} size="sm" />
					</a>
				</div>

				<div className="card-img-vector">
					<img src={Mascot} alt="" />
				</div>
			</div>

			<div className="card p-4">
				<div className="card-content">
					<Card.Img variant="top" src={GameIcons} className="mb-3" />

					<Card.Title className="mb-3">
						Game Ojek Online Interface
					</Card.Title>

					<Card.Text className="mb-3">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum is simply dummy text
						of the printing and typesetting industry.
					</Card.Text>
				</div>

				<div className="btn-portfolio">
					<a href="#">
						Play Now
						<FontAwesomeIcon icon={faLongArrowRight} size="sm" />
					</a>
				</div>

				<div className="card-img-vector">
					<img src={Mascot} alt="" />
				</div>
			</div>

			<div className="card p-4">
				<div className="card-content">
					<Card.Img variant="top" src={GameIcons} className="mb-3" />

					<Card.Title className="mb-3">
						Game Ojek Online Interface
					</Card.Title>

					<Card.Text className="mb-3">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum is simply dummy text
						of the printing and typesetting industry.
					</Card.Text>
				</div>

				<div className="btn-portfolio">
					<a href="#">
						Play Now
						<FontAwesomeIcon icon={faLongArrowRight} size="sm" />
					</a>
				</div>

				<div className="card-img-vector">
					<img src={Mascot} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
