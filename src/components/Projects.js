import Card from "./Card";
import projects from "../db/db";
import "./Projects.css";
import { useInView } from "react-intersection-observer";

const Projects = () => {
	const { ref, inView } = useInView();

	return (
		<section id="Projects" ref={ref} className={inView ? "show projects col centre" : "projects col centre"}>
			<h3>
				<span>./</span>projects
			</h3>
			<div className="cards-container">
				{projects.map((project) => {
					return <Card title={project.title} description={project.description} thumbnail={project.thumbnail} demo_link={project.demo_link} repo_link={project.repo_link} key={project.id} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
