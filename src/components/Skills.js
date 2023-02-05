import "./Skills.css";
import skills_icons_placeholder from "../assets/skills-icons-placeholder.png";

const Skills = () => {
	return (
		<section className="skills col">
			<div className="separator"></div>
			<h3>
				<span>./</span>skills
			</h3>
			<img className="skills-icons-placeholder" alt="test" src={skills_icons_placeholder} />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dolor vitae, diam velit venenatis quis nunc cursus. Integer sem lobortis diam vitae tincidunt hac. Tortor hac mi adipiscing
				ornare dolor quis. Rhoncus vitae
			</p>
		</section>
	);
};

export default Skills;
