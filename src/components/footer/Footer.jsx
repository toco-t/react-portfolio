import React from "react";
import "./footer.css";
import trees from "../../assets/trees.png";

function Footer() {
	return (
		<footer>
			<img src={trees} alt="trees-img" />
			<div className="footer__copyright">
				<small>&copy; Toco Tachibana {new Date().getFullYear()}</small>
			</div>
		</footer>
	);
}

export default Footer;
