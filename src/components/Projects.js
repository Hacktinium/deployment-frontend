import projects_placeholder from "../assets/projects_placeholder.png";

const Projects = () => {
	return (
		<section className="projects col">
			<div className="separator"></div>
			<h3>
				<span>./</span>projects
			</h3>
			<a href="">
				<img className="projects_placeholder" alt="" src={projects_placeholder} />
			</a>
		</section>
	);
};

export default Projects;
