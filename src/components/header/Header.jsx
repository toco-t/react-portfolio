import React from "react";
import "./header.css";
import laptop from "../../assets/laptop.jpg";
import CallToAction from "./CTA";
import Socials from "./Socials";

function Header() {
	return (
		<header>
			<div className="container header__container">
				<h1>Toco</h1>
				<h5 className="text-light">Aspiring Software Engineer</h5>
				<CallToAction />
				<Socials />

				<img src={laptop} alt="laptop-img" />

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
