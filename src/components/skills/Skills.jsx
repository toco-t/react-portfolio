import React from "react";
import "./skills.css";
import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiPython } from "react-icons/si";
import { FaBootstrap, FaReact, FaNode, FaJava } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";

function Skills() {
	const size = 21;

	return (
		<section id="skills">
			<h2>Skill Sets</h2>

			<div className="container skills__container">
				<div className="skills__frontend">
					<h3>Front-end Development</h3>
					<div className="skills__content">
						<article className="skills__details">
							<SiHtml5 size={size} className="skills__details-icon" />
							<div>
								<h4>HTML5</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
						<article className="skills__details">
							<SiCss3 size={size} className="skills__details-icon" />
							<div>
								<h4>CSS3</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="skills__details">
							<SiJavascript size={size} className="skills__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
						<article className="skills__details">
							<FaBootstrap size={size} className="skills__details-icon" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
						<article className="skills__details">
							<FaReact size={size} className="skills__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>

				<div className="skills__backend">
					<h3>Back-end Development</h3>
					<div className="skills__content">
						<article className="skills__details">
							<SiPython size={size} className="skills__details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
						<article className="skills__details">
							<FaNode size={28} className="skills__details-icon" />
							<div>
								<h4>Node.js</h4>
								<small className="text-light">Advanced</small>
							</div>
						</article>
						<article className="skills__details">
							<SiMongodb size={size} className="skills__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="skills__details">
							<FaJava size={28} className="skills__details-icon" />
							<div>
								<h4>Java</h4>
								<small className="text-light">Novice</small>
							</div>
						</article>
						<article className="skills__details">
							<HiDesktopComputer size={size} className="skills__details-icon" />
							<div>
								<h4>C</h4>
								<small className="text-light">Novice</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
