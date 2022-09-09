import React, { useState } from "react";
import "./nav.css";
import { IoEarth } from "react-icons/io5";
import { GiNightSky, GiKnockedOutStars, GiDeathStar } from "react-icons/gi";
import { SiStarship } from "react-icons/si";

function Nav() {
	const [active, setActive] = useState("#");

	let size = 36;

	function checkState(section) {
		return active === section ? "active" : "";
	}

	return (
		<nav>
			<a href="#header" onClick={() => setActive("#")} className={checkState("#")}>
				<IoEarth size={size} />
				<label htmlFor="">Home</label>
			</a>
			<a
				href="#about"
				onClick={() => setActive("about")}
				className={checkState("about")}
			>
				<GiNightSky size={size} />
				<label htmlFor="">About</label>
			</a>
			<a
				href="#skills"
				onClick={() => setActive("skills")}
				className={checkState("skills")}
			>
				<GiKnockedOutStars size={size} />
				<label htmlFor="">Skills</label>
			</a>
			<a
				href="#projects"
				onClick={() => setActive("projects")}
				className={checkState("projects")}
			>
				<GiDeathStar size={size} />
				<label htmlFor="">Projects</label>
			</a>
			<a
				href="#contact"
				onClick={() => setActive("contact")}
				className={checkState("contact")}
			>
				<SiStarship size={size} />
				<label htmlFor="">Contact</label>
			</a>
		</nav>
	);
}

export default Nav;
