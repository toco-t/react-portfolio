import React from "react";
import resume from "../../assets/resume.pdf";

function CallToAction() {
	return (
		<div className="cta">
			<a href={resume} download className="btn">
				Download Resume
			</a>
			<a href="#contact" className="btn btn-primary">
				Contact
			</a>
		</div>
	);
}

export default CallToAction;
