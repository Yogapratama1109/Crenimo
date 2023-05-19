import { useState } from "react";

import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logoCrenimo from "../../assets/brand/crenimo_putih.png";

function NavBar() {
	const [activeLink, setActiveLink] = useState("home");

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<>
			<Navbar sticky="top" expand="md" className="mb-3">
				<Container>
					<Navbar.Brand href="#" className="text-white">
						<img
							alt=""
							src={logoCrenimo}
							style={{ width: "30px", height: "100%" }}
						></img>
					</Navbar.Brand>
					<NavbarToggle aria-controls={`offcanvasNavbar-expand-md`}>
						<span className="navbar-toggler-icon"></span>
					</NavbarToggle>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						placement="start"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title
								id={`offcanvasNavbarLabel-expand-md`}
								className="offcanvas-title"
							>
								<img
									alt=""
									src={logoCrenimo}
									style={{ width: "30px", height: "100%" }}
								></img>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link
									href="#home"
									className={
										activeLink == "home"
											? "active navbar-link"
											: "navbar-link"
									}
									onClick={() => onUpdateActiveLink("home")}
								>
									Home
								</Nav.Link>
								<Nav.Link
									href="#products"
									className={
										activeLink == "products"
											? "active navbar-link"
											: "navbar-link"
									}
									onClick={() =>
										onUpdateActiveLink("products")
									}
								>
									Products
								</Nav.Link>
								<Nav.Link
									href="#portfolios"
									className={
										activeLink == "portfolios"
											? "active navbar-link"
											: "navbar-link"
									}
									onClick={() =>
										onUpdateActiveLink("portfolios")
									}
								>
									Portofolios
								</Nav.Link>
								<Nav.Link
									href="#clients"
									className={
										activeLink == "clients"
											? "active navbar-link"
											: "navbar-link"
									}
									onClick={() =>
										onUpdateActiveLink("clients")
									}
								>
									Clients
								</Nav.Link>
								<Nav.Link
									href="#footer"
									className={
										activeLink == "footer"
											? "active navbar-link"
											: "navbar-link"
									}
									onClick={() => onUpdateActiveLink("footer")}
								>
									Contact Us
								</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
