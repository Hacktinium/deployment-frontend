import "./Skills.css";
import { useState } from "react";
import Slider from "react-slick";
import html5 from "../assets/skills-icons/html5.svg";
import css3 from "../assets/skills-icons/css3.svg";
import node from "../assets/skills-icons/node.svg";
import postgresql from "../assets/skills-icons/postgresql.svg";
import js from "../assets/skills-icons/js.svg";
import ts from "../assets/skills-icons/ts.svg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const icons = [html5, css3, node, postgresql, js, ts];

const Skills = () => {
	const NextArrow = ({ onClick }) => {
		return (
			<div className="arrow next" onClick={onClick}>
				<FaArrowRight style={{ color: "var(--medium-blue)" }} />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className="arrow prev" onClick={onClick}>
				<FaArrowLeft style={{ color: "var(--medium-blue)" }} />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		// fade: true,
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		// autoplay: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};

	// import cx from 'classnames';

	// <li className={cx('list-group-item', {
	// 	 'alert alert-danger': value === 3,
	// 	 'alert alert-info': value === 1,
	// 	 'alert alert-warning': value === 2,
	// 	 'strike-through': todo.completed,
	// })} />

	return (
		<section className="skills col">
			{/* <div className="separator"></div> */}
			<h3>
				<span>./</span>skills
			</h3>
			<div className="slider-wrapper">
				<Slider {...settings}>
					{icons.map((img, idx) => (
						<div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
							<img src={img} alt={img} />
						</div>
					))}
				</Slider>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dolor vitae, diam velit venenatis quis nunc cursus. Integer sem lobortis diam vitae tincidunt hac. Tortor hac mi adipiscing
				ornare dolor quis. Rhoncus vitae
			</p>
		</section>
	);
};

export default Skills;
