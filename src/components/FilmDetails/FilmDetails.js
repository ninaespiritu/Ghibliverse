import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilmDetails = () => {
	const [film, setFilm] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchItem();
    }, [])

	const fetchItem = async () => {
		const response = await fetch(
			`https://ghibliapi.herokuapp.com/films/${ id }`
		);
		const data = await response.json();
		console.log(data);
		setFilm(data);
	};

	return (
		<div>
			<h1>{film.title}</h1>
            <h2>{film.original_title}</h2>
            <h2>{film.original_title_romanised}</h2>
            <p>{film.description}</p>
            <h4>Release Date: {film.release_date}</h4>
            <h4>Director: {film.director}</h4>
            <h4>Producer: {film.producer}</h4>
            <h4>Runtime: {film.running_time} minutes</h4>
            <h4>Score (Rotten Tomatoes): {film.rt_score}%</h4>
            <div>
                <img src={film.image} alt="" />
            </div>
            <div>
                <img src={film.movie_banner} alt="" />
            </div>
		</div>
	);
};
