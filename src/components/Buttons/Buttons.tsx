import React from "react";

import "./Buttons.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

function Buttons(props) {
	return (
		<section id="buttons">
			<Button>
				{props.button.title}
				<FontAwesomeIcon icon={faLongArrowRight} size="sm" />
			</Button>
		</section>
	);
}

export default Buttons;
