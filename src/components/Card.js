import "./Card.css";

const Card = ({ title, description, thumbnail, demo_link, repo_link }) => {
	return (
			<div className="Card">
				<div className="glass col">
					<div className="info col">
						<h3>{title}</h3>
						<p>{description}</p>
						<div className="links_container row">
							<span className="demo_links">
								<a href={demo_link} target="_blank" rel="noreferrer">
									Demo
								</a>{" "}
								|{" "}
								<a href={repo_link} target="_blank" rel="noreferrer">
									Repo
								</a>
							</span>
						</div>
					</div>
				</div>
				<img className="card-img" alt={title} src={thumbnail} />
			</div>
	);
};

export default Card;
