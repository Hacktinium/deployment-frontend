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

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};

	return (
		<section id='Skills' className="skills col">
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

								// targets the slide 'two to the right' of the active slide
								rightEdgeSlide: imageIndex < icons.length - 2 && idx === imageIndex + 2,
								rightEdgeSlide_: imageIndex >= icons.length - 2 && idx === imageIndex + 2 - icons.length,

								// targets the slide 'two to the left' of the active slide
								leftEdgeSlide: imageIndex < 2 && idx === imageIndex + icons.length - 2,
								leftEdgeSlide_: imageIndex >= 2 && idx === imageIndex - 2,

								// targets the slide to the right of the active slide
								rightAdjacentSlide: imageIndex < icons.length - 1 && idx === imageIndex + 1,
								rightAdjacentSlide_: imageIndex >= icons.length - 1 && idx === imageIndex + 1 - icons.length,

								// targets the slide to the left of the active slide
								leftAdjacentSlide: imageIndex < 1 && idx === imageIndex + icons.length - 1,
								leftAdjacentSlide_: imageIndex >= 1 && idx === imageIndex - 1,
							})}
						>
							<img src={img} alt={img} />
						</div>
					))}
				</Slider>
			</div>
			<p>
				Here are the languages, libraries, and frameworks I've been working with recently. I'm always looking to add to this skillset, and deepen my understanding of the ones I already have. If you'd like to work together, don't hesitate to <a href="#Contact">reach out to me</a> below!</p>
		</section>
	);
};

export default Skills;
