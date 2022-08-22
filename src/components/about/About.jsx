import React from "react";
import cloud from "../../assets/cotton.png";
import "./about.css";

function About() {
	return (
		<section id="about">
			<h2>About Toco</h2>

			<div className="container about__container">
				<div className="about__img">
					<img src={cloud} alt="cloud-img" />
				</div>
				<div className="about__content">
					<p>
						Toco is a second-term Computer Systems Technology (CS) student at
						British Columbia Institute of Technology, in the Co-op program. He
						is currently based in Burnaby, BC and passionate about exploring and
						learning new technologies...
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
