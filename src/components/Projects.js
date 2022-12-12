import Card from "./Card";
import projects from '../db/db'
import "./Projects.css";


const Projects = () => {
	return (
		<section className="projects col">
			<div className="separator"></div>
			<h3>
				<span>./</span>projects
			</h3>
			<div className="cards-container">
				{projects.map((project) => {
								return (
									<Card
										title={project.title}
										thumbnail={project.thumbnail_url}
										link={project.link}
										key={project.id}
									/>
								);
							})}
			</div>
		</section>
	);
};

export default Projects;
