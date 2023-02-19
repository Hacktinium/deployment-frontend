import "./About.css";
import { useInView } from "react-intersection-observer";

const About = () => {
	const { ref, inView } = useInView();

	return (
		<section id="About" ref={ref} className={inView ? 'show about col centre' : 'about col centre'}>
			<h3>
				README<span>.md</span>
			</h3>
			<p>
				Hey there! I'm Steve, a junior full-stack dev based near Cambridge, UK.
				<br />
				I recently graduated the School of Code full-stack web development bootcamp and I'm now seeking my first role in the industry.
				<br />
				<br />
				When I'm not building (check out my projects below!), I enjoy gaming, hiking, camping, astronomy and watching Studio Ghibli films 💖
			</p>
		</section>
	);
};

export default About;
