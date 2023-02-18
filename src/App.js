import "./App.css";
// import bgImgTop from "../assets/bgImgTop.jpg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// entry.target.classList.toggle('show', entry.isIntersecting);


function App() {
	return (
		<div className="container">
			<div className="App">
				<NavBar />
				<main className="main">
					<Hero />
					<About />
					<Projects />
					<Skills />
					<Contact />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
