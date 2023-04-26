import React from "react";

import "./FooterApp.css";
import { Container, Row, Col } from "react-bootstrap";

function FooterApp() {
	return (
		<section id="footer">
			<Container>
				<Row>
					<Col md={12} lg={6} xl={6}>
						<div className="footer-brand mb-4">
							<h4>
								<span>CRE</span>NIMO
							</h4>
						</div>

						<div className="footer-content">
							<h4>CV. Creative Putra Jaya</h4>
							<h4 className="mb-5">
								Jl. KH. Wahid Hasyim Kel No.10D Jakarta,
								Indonesia
							</h4>
							<h4>© 2019-2023 BuildWith Angga</h4>
						</div>
					</Col>

					<Col md={12} lg={3} xl={3}>
						<div className="footer-nav-title mb-4">
							<h4>Our Services</h4>
						</div>

						<div className="footer-links  d-flex flex-column">
							<a href="" className="nav-links">
								3D Design
							</a>
							<a href="" className="nav-links">
								Game Development
							</a>
						</div>
					</Col>

					<Col md={12} lg={3} xl={3}>
						<div className="footer-nav-title mb-4">
							<h4>Our Contact</h4>
						</div>
						<div className="footer-content">
							<h4>(021) 50858650</h4>
							<h4>sales@fanintek.com</h4>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default FooterApp;
