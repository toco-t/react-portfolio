import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Skills />
			<Projects />
		</>
	);
}

export default App;
