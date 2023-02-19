import "./Contact.css";
import { useInView } from "react-intersection-observer";

const Contact = () => {
	const { ref, inView } = useInView();

	return (
		<section id="Contact" ref={ref} className={inView ? "show contact col centre" : "contact col centre"}>
			<h3>
				<span>function </span>getInTouch( )
			</h3>
			<form>
				<label htmlFor="name">
					Name
					<input id="name" placeholder="Ada Lovelace"></input>
				</label>
				<label htmlFor="topic">
					Topic
					<select id="topic">
						<option>Hire me!</option>
						<option>Collaborate with me! (open-source)</option>
						<option>What shall we talk about?</option>
					</select>
				</label>
				<label htmlFor="message">
					Message
					<textarea name="message" id="message" placeholder="A penny for your thoughts..."></textarea>
				</label>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default Contact;
