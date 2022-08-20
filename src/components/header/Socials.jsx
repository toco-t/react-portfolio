import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Socials() {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/toco-tachibana/" target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com/toco-t/" target="_blank">
				<BsGithub />
			</a>
		</div>
	);
}

export default Socials;
