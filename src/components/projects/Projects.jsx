import React from "react";
import "./projects.css";
import Project from "./Project";

function Projects() {
	const projects = [
		{
			id: 1,
			title: "Discord Bot",
			stack: "Python | Discord API | Web sockets",
			github: "https://github.com/toco-t",
		},
		{
			id: 2,
			title: "PokeDex",
			stack: "React.js | MongoDB | Express.js | Node.js ",
			github: "https://github.com/toco-t/",
		},
		{
			id: 3,
			title: "NoteHub",
			stack: "JavaScript | EJS",
			github: "https://github.com/toco-t/NoteHub",
		},
		{
			id: 4,
			title: "SwapOmen",
			stack: "HTML | CSS | JavaScript | Node.js | Express",
			github: "https://github.com/LinnyPurple/2800-202210-DTC09",
		},
	];

	return (
		<section id="projects">
			<h2>Projects</h2>

			<div className="container projects__container">
				{projects.map((project) => {
					return (
						<Project
							key={project.id}
							title={project.title}
							stack={project.stack}
							github={project.github}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Projects;
