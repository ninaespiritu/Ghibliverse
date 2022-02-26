import { Link } from "react-router-dom";

export const Films = ({ films }) => {
	return (
		<div>
			<h1>Films</h1>
			<div>
				{films.map((film) => (
					<div key={film.id}>
						<Link to={`/films/${film.id}`}>
							<h2>{film.title}</h2>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
