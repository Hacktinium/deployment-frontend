import "./Card.css";

const Card = ({ title, thumbnail, link }) => {
	return (
		<a href={link} className="project-link">
			<div className="Card">
				<div className="glass col">
					<div className="info col">
						<h3>{title}</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolores cumque eius voluptatum qui quos cupiditate odit perferendis ab magni?</p>
					</div>
				</div>
				<img className="card-img" alt={title} src={thumbnail} />
			</div>
		</a>
	);
};

export default Card;
