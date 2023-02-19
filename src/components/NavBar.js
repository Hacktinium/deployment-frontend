import "./NavBar.css";
import { BsSliders } from "react-icons/bs";

const NavBar = () => {
	return (
		<nav className="navbar row">
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>

			<a href="test">{/* <BsSliders className="sliders-icon" /> */}</a>
		</nav>
	);
};

export default NavBar;
