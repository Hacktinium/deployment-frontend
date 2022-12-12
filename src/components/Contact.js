const Contact = () => {
	return (
		<section className="contact col">
			<div className="separator"></div>
			<h3>
				<span>function </span>getInTouch( )
			</h3>
			<form>
				<label HTMLfor="name">
					Name
					<input id="name" placeholder="Ada Lovelace"></input>
				</label>
				<label HTMLfor="topic">
					Topic
					<select id="topic">
						<option>Hire me!</option>
						<option>Collaborate with me! (open-source)</option>
						<option>What shall we talk about?</option>
					</select>
				</label>
				<label HTMLfor="message">
					Message
					<textarea name="message" id="message" placeholder="A penny for your thoughts..."></textarea>
				</label>
				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default Contact;
