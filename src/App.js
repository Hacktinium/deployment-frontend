import "./App.css";
import bgImgTop from "./bgImgTop.jpg";

function App() {
	return (
		<div className="App">
			<img className="bgImgTop" alt=" " src={bgImgTop} />
			<div class="header">header</div>
			<div class="hero">
				<h1>
					Hi! <span>I'm Steve.</span>
				</h1>
				<h2>hacktinium</h2>
			</div>
			<div class="projects">projects</div>
			<div class="readme">readme</div>
			<div class="skills">skills</div>
			<div class="contact-form">contact-form</div>
			<div class="footer">footer</div>
		</div>
	);
}

export default App;
