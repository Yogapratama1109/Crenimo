import React from "react";

import "./TitleSection.css";

function TitleSection(props) {
	return (
		<div className="title-section">
			<h3 className="mb-4">{props.subtitle}</h3>
			<h1 className="mb-4">{props.title}</h1>
		</div>
	);
}

export default TitleSection;
