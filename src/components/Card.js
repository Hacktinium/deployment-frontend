import React from "react";
import "./Card.css";

const Card = ({title, thumbnail, link}) => {
	return (
		<div className="Card">
			<img className="card-img" alt={title} src={thumbnail} />
			<div className="shadow"></div>
			<article className="info">
				<h3>{title}</h3>
				<p>description</p>
			</article>
		</div>
	);
};

export default Card;
