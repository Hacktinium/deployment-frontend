import socials_icons_placeholder from "../assets/socials-icons-placeholder.png";

const Footer = () => {
	return (
		<footer className="col">
			<a href="">
				<img className="skills-icons-placeholder" alt="social links" src={socials_icons_placeholder} />
			</a>
			<p>Made with 😻 by Hacktinium</p>
		</footer>
	);
};

export default Footer;
