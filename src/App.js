import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Readme from "./Readme";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import bgImgTop from './bgImgTop.jpg'


function App() {
	return (
		<div className="App">
			<img className='bgImgTop' alt=' ' src={bgImgTop} />
			<Header />
			<Hero />
			<Projects />
			<Readme />
			<Skills />
			<ContactForm />
			<Footer />
		</div>
	);
}

export default App;
