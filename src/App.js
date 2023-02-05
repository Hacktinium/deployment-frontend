import "./App.css";
// import bgImgTop from "../assets/bgImgTop.jpg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
