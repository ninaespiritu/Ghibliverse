import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FilmDetails.css";

export const FilmDetails = () => {
	const [film, setFilm] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetchItem();
	}, []);

	const fetchItem = async () => {
		const response = await fetch(
			`https://ghibliapi.herokuapp.com/films/${id}`
		);
		const data = await response.json();
		console.log(data);
		setFilm(data);
	};

	return (
		<div className="film-details">
			<div className="film-header">
				<div className="movie-banner">
					<img src={film.movie_banner} alt="" />
				</div>

				<div className="film-header-info">
					<div className="film-header-text">
						<h1>{film.title}</h1>
						<h2>{film.original_title}</h2>
						<h2>{film.original_title_romanised}</h2>
					</div>
				</div>
			</div>

			<p>{film.description}</p>
			<h4>Release Date: {film.release_date}</h4>
			<h4>Director: {film.director}</h4>
			<h4>Producer: {film.producer}</h4>
			<h4>Runtime: {film.running_time} minutes</h4>
			<h4>Score (Rotten Tomatoes): {film.rt_score}%</h4>
			<div>
				<img src={film.image} alt="" />
			</div>
		</div>
	);
};
