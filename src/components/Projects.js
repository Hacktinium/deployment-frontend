import Card from "./Card";
import projects from '../db/db'
import "./Projects.css";


const Projects = () => {
	return (
		<section id='Projects' className="projects col centre">
			{/* <div className="separator"></div> */}
			<h3>
				<span>./</span>projects
			</h3>
			<div className="cards-container">
				{projects.map((project) => {
								return (
									<Card
										title={project.title}
										description={project.description}
										thumbnail={project.thumbnail}
										demo_link={project.demo_link}
										repo_link={project.repo_link}
										key={project.id}
									/>
								);
							})}
			</div>
		</section>
	);
};

export default Projects;
