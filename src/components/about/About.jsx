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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
						excepturi vero ex in eos dolorum iure voluptate mollitia iste,
						provident nobis, laudantium omnis dolore molestias est minima nemo
						repellendus quo?
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
