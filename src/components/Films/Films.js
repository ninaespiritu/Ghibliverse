import { Link } from "react-router-dom";
import "./Films.css";

export const Films = ({ films }) => {
	return (
		<div>
			<h1>Films</h1>
			<div className="grid">
				{films.map((film) => (
					<div key={film.id} className="film">
						<Link to={`/films/${film.id}`}>
							<div className="film-img">
								<img src={film.image} alt="" />
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
