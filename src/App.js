import "./index.css";
import bgImgTop from "./bgImgTop.jpg";
import skills_icons_placeholder from "./skills-icons-placeholder.png";
import socials_icons_placeholder from "./socials-icons-placeholder.png";
import { BsSliders } from "react-icons/bs";

function App() {
	return (
		<div className="App">
			<img className="bgImgTop" alt="" src={bgImgTop} />

			<div className="header">
				<label class="switch">
					<input type="checkbox" />
					<span class="slider round"></span>
				</label>
				<BsSliders />
			</div>

			<div className="hero">
				<h1>
					Hi! <span>I'm Steve.</span>
				</h1>
				<h2>hacktinium</h2>
			</div>

			<div className="separator"></div>
			<div className="projects">
				<h3>
					<span>./</span>projects
				</h3>
			</div>

			<div className="separator"></div>
			<div className="readme">
				<h3>
					README<span>.md</span>
				</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dolor vitae, diam velit venenatis quis nunc cursus. Integer sem lobortis diam vitae tincidunt hac. Tortor hac mi adipiscing
					ornare dolor quis. Rhoncus vitae rhoncus sit vel purus, aenean sed est. Egestas vitae dignissim diam interdum dictum landit lacus, diam nisi. Felis, mi convallis pulvinar feugiat id urna. Id
					quam egestas fringilla amet nisl facilisis.
				</p>
			</div>

			<div className="separator"></div>
			<div className="skills">
				<h3>
					<span>./</span>skills
				</h3>
				<img className="skills-icons-placeholder" alt="" src={skills_icons_placeholder} />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dolor vitae, diam velit venenatis quis nunc cursus. Integer sem lobortis diam vitae tincidunt hac. Tortor hac mi adipiscing
					ornare dolor quis. Rhoncus vitae
				</p>
			</div>

			<div className="separator"></div>
			<div className="contact-form">
				<h3>
					<span>function </span>getInTouch( )
				</h3>
				<form>
					<label HTMLfor="name">
						Name
						<input placeholder="Ada Lovelace"></input>
					</label>
					<label HTMLfor="topic">
						Topic
						<select>
							<option>Hire me!</option>
							<option>Collaborate with me! (open-source)</option>
							<option>What shall we talk about?</option>
						</select>
					</label>
					<label HTMLfor="message">
						Message
						<textarea name="message" id="message" placeholder="a penny for your thoughts..."></textarea>
					</label>
				</form>
			</div>

			<footer>
				<img className="skills-icons-placeholder" alt="social links" src={socials_icons_placeholder} />
				<p>Made with 😻 by Hacktinium</p>
			</footer>
		</div>
	);
}

export default App;
