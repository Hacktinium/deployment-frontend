import TypeIt from "typeit-react";
import "./Hero.css";

const Hero = () => {
	return (
		<section id="Hero" className="hero multipleStrings">
			<TypeIt
				as="h1"
				options={{ speed: 60, loop: true, loopDelay: 2000, lifeLike: true }}
				getBeforeInit={(instance) => {
					instance
						.pause(1000)
						.type(`Hi! `)
						.pause(250)
						.type(`I'm `)
						.type(`<span style="color:var(--medium-blue);">Steeve.</span>`)
						.pause(650)
						.move(-3)
						.pause(300)
						.delete(1)
						.pause(350)
						.move(3)
						.pause(850)
						.delete(6)
						.pause(650)
						.type(`<span style="color:var(--medium-blue);">a.k.a hacktinium.</span>`)
						.pause(1050)
						.delete(17)
						.pause(500)
						.type(`<span style="color:var(--medium-blue);">a developer.</span>`)
						.pause(950)
						.delete(12)
						.pause(500)
						.type(`<span style="color:var(--medium-blue);">a Studio Ghibli fan.</span>`)
						.pause(950)
						.delete(20)
						.pause(500)
						.type(`<span style="color:var(--medium-blue);">a lover of 🍕.</span>`)
						.pause(950)
						.delete(13)
						.pause(500)
						.type(`<span style="color:var(--medium-blue);">oversharing, pehaps\? 🤔</span>`)
						.pause(850);
					return instance;
				}}
			/>
		</section>
	);
};

export default Hero;
