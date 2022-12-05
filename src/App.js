import "./index.css";
// import bgImgTop from "./bgImgTop.jpg";
import skills_icons_placeholder from "./skills-icons-placeholder.png";
import socials_icons_placeholder from "./socials-icons-placeholder.png";
import projects_placeholder from "./projects_placeholder.png";
// import bgImgTop from "./bgImgTop.jpg";
import { BsSliders } from "react-icons/bs";

function App() {
	return (
		<div className="App col">
			{/* <img className="bgImgTop" alt="" src={bgImgTop} /> */}
			<nav className="header row">
				<label class="switch">
					<input type="checkbox" />
					<span class="slider round"></span>
				</label>
				{/* TODO: Change this styling to be accessible */}
				<a href="">
					<BsSliders className="sliders-icon" />
				</a>
			</nav>

			<main className="main col">
				<section className="hero">
					<h1>
						Hi! <span>I'm Steve.</span>
					</h1>
					<h2>hacktinium</h2>
				</section>

				<section className="projects col">
					<div className="separator"></div>
					<h3>
						<span>./</span>projects
					</h3>
					<a href="">
						<img className="projects_placeholder" alt="" src={projects_placeholder} />
					</a>
				</section>

				<section className="readme col">
					<div className="separator"></div>
					<h3>
						README<span>.md</span>
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dolor vitae, diam velit venenatis quis nunc cursus. Integer sem lobortis diam vitae tincidunt hac. Tortor hac mi adipiscing
						ornare dolor quis. Rhoncus vitae rhoncus sit vel purus, aenean sed est. Egestas vitae dignissim diam interdum dictum landit lacus, diam nisi. Felis, mi convallis pulvinar feugiat id urna.
						Id quam egestas fringilla amet nisl facilisis.
					</p>
				</section>

				<section className="skills col">
					<div className="separator"></div>
					<h3>
						<span>./</span>skills
					</h3>
					<img className="skills-icons-placeholder" alt="" src={skills_icons_placeholder} />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dolor vitae, diam velit venenatis quis nunc cursus. Integer sem lobortis diam vitae tincidunt hac. Tortor hac mi adipiscing
						ornare dolor quis. Rhoncus vitae
					</p>
				</section>

				<section className="contact-form col">
					<div className="separator"></div>
					<h3>
						<span>function </span>getInTouch( )
					</h3>
					<form>
						<label HTMLfor="name">
							Name
							<input id="name" placeholder="Ada Lovelace"></input>
						</label>
						<label HTMLfor="topic">
							Topic
							<select id="topic">
								<option>Hire me!</option>
								<option>Collaborate with me! (open-source)</option>
								<option>What shall we talk about?</option>
							</select>
						</label>
						<label HTMLfor="message">
							Message
							<textarea name="message" id="message" placeholder="A penny for your thoughts..."></textarea>
						</label>
						<button type="submit">Submit</button>
					</form>
				</section>
			</main>

			<footer className="col">
				<a href="">
					<img className="skills-icons-placeholder" alt="social links" src={socials_icons_placeholder} />
				</a>
				<p>Made with 😻 by Hacktinium</p>
			</footer>
		</div>
	);
}

export default App;
