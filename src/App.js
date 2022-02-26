import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/HomePage/Home";
import { Films } from "./components/Films/Films";
import { useEffect, useState } from "react";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";

const App = () => {
	const [films, setFilms] = useState({});

	useEffect(() => {
		fetchFilms();
	}, []);

	const fetchFilms = async () => {
		const response = await fetch("https://ghibliapi.herokuapp.com/films");
		const data = await response.json();
		console.log(data);
		setFilms(data);
	};

	return (
		<Router>
			<Navbar />

			{/* <div>
				{films.map(film => (
					<h2>{film.title}</h2>
				))}
			</div> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/films" element={<Films films={films} />} />
        <Route path="/films/:id" element={<FilmDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
