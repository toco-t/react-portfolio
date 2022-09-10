import React from "react";

function Project(props) {
	return (
		<article className="projects__item">
			<h3>{props.title}</h3>
			<small>{props.stack}</small>
			<a href={props.github} className="btn" target="_blank" rel="noopener noreferrer">
				GitHub
			</a>
		</article>
	);
}

export default Project;
