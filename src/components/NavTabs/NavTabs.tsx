import React from "react";

import "./NavTabs.css";
import ActiveCards from "../Active Card/ActiveCards";
import { Tab, Nav } from "react-bootstrap";

function NavTabs() {
	return (
		<section id="portofolios">
			<Tab.Container id="portofolios-tabs" defaultActiveKey="game-dev">
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
						<ActiveCards />
					</Tab.Pane>
					<Tab.Pane eventKey="3d-design" className="mt-5">
						<ActiveCards />
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</section>
	);
}

export default NavTabs;
