import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";

const socials = [
	{
		icon: <AiFillGithub size={55} />,
		link: "https://github.com/Hacktinium",
		id: 1,
	},
	{
		icon: <AiFillTwitterCircle size={55} />,
		link: "https://twitter.com/Hacktinium",
		id: 2,
	},
	{
		icon: <AiFillLinkedin size={55} />,
		link: "https://www.linkedin.com/in/stevebeecheno/",
		id: 3,
	},
];

function Footer() {
	return (
		<div className="socials row">
			{socials.map((social) => {
				return (
					<div key={social.id} className="">
						<a href={social.link} target="_blank" rel="noreferrer">
							{social.icon}
						</a>
					</div>
				);
			})}
		</div>
	);
}

export default Footer;
