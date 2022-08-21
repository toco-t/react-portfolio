import React from "react";
import "./header.css";
import moon from "../../assets/moon.png";
import CallToAction from "./CTA";
import Socials from "./Socials";

function Header() {
	return (
		<header id="header">
			<div className="container header__container">
				<h1>Toco Tachibana</h1>
				<h5 className="text-light">Aspiring Software Engineer</h5>
				<CallToAction />
				<Socials />

				<img className="moon" src={moon} alt="moon-img" />
			</div>
		</header>
	);
}

export default Header;
