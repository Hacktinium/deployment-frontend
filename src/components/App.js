import "./App.css";
// import bgImgTop from "../assets/bgImgTop.jpg";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
	return (
		<div className="App col">
			<NavBar />
			
			<main className="main col">
				<Hero />
				<Projects />
				<About />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
