import "./Skills.css";
import { useState } from "react";
import cx from "classnames";
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
	console.log(`imageIndex= ${imageIndex}`);

	const settings = {
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

	return (
		<section className="skills col">
			{/* <div className="separator"></div> */}
			<h3>
				<span>./</span>skills
			</h3>
			<div className="slider-wrapper">
				<Slider {...settings}>
					{icons.map((img, idx) => (
						<div
							key={idx}
							className={cx("slide", {
								activeSlide: idx === imageIndex,

								// targets the slide that is 2 to the right of the active slide when active slide index is < icons.length - 2
								rightEdgeSlide: imageIndex < icons.length - 2 && idx === imageIndex + 2,
								// targets the slide that is 2 to the right of the active slide when active slide index is >= icons.length - 2
								rightEdgeSlide_: imageIndex >= icons.length - 2 && idx === imageIndex + 2 - icons.length,

								// targets the slide that is 2 to the left of the active slide when active slide index is < 2
								leftEdgeSlide: imageIndex < 2 && idx === imageIndex + icons.length - 2,
								// targets the slide that is 2 to the left of the active slide when active slide index is >= 2
								leftEdgeSlide_: imageIndex >= 2 && idx === imageIndex - 2,

								



								// targets the slide that is 2 to the right of the active slide when active slide index is < icons.length - 2
								rightAdjacentSlide: imageIndex < icons.length - 1 && idx === imageIndex + 1,
								// targets the slide that is 2 to the right of the active slide when active slide index is >= icons.length - 2
								rightAdjacentSlide_: imageIndex >= icons.length - 1 && idx === imageIndex + 1 - icons.length,

								// targets the slide that is 2 to the left of the active slide when active slide index is < 2
								leftAdjacentSlide: imageIndex < 1 && idx === imageIndex + icons.length - 1,
								// targets the slide that is 2 to the left of the active slide when active slide index is >= 2
								leftAdjacentSlide_: imageIndex >= 1 && idx === imageIndex - 1,
							})}
						>
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
