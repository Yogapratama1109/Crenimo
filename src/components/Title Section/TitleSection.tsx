import React from "react";

import "./TitleSection.css";

function TitleSection(props) {
	return (
		<div className="title-section" id={props.section.id}>
			<h3 className="mb-4">{props.section.subtitle}</h3>
			<h1 className="mb-4">{props.section.title}</h1>
		</div>
	);
}

export default TitleSection;
