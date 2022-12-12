import { BsSliders } from "react-icons/bs";

const NavBar = () => {
	return (
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
	);
};

export default NavBar;
