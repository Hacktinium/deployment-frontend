import "./Card.css";

const Card = ({ title, thumbnail, link }) => {
	return (
		<a href={link} className="project-link">
			<div className="Card">
				<img className="card-img" alt={title} src={thumbnail} />
				<div className="glass"></div>
				<div className="shadow"></div>
				<article className="info">
					<h3>{title}</h3>
					<p>description</p>
				</article>
			</div>
		</a>
	);
};

export default Card;
