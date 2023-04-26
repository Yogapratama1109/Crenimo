import React, { useState } from "react";

import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavBar() {
	const [activeLink, setactiveLink] = useState("home");

	const onUpdateActiveLink = (value) => {
		setactiveLink(value);
	};

	return (
		<>
			<Navbar sticky="top" expand="md" className="mb-3">
				<Container>
					<Navbar.Brand href="#" className="text-white">
						<h6>
							<span>CRE</span>NIMO
						</h6>
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
								<h3>
									<span>CRE</span>NIMO
								</h3>
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
									href="#portofolios"
									className={
										activeLink == "portofolios"
											? "active navbar-link"
											: "navbar-link"
									}
									onClick={() =>
										onUpdateActiveLink("portofolios")
									}
								>
									Portofolios
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
