import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/HomePage/Home";
import { Films } from "./components/Films/Films";
import { useEffect, useState } from "react";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import { fetchLogin, fetchSignup } from "./utils";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";

const App = () => {
	const [films, setFilms] = useState({});
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSignup = async (e) => {
		e.preventDefault();
		fetchSignup(setUser, email, username, password);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		fetchLogin(setUser, username, password);
	};

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
		<div>
			{user ? (
				<Router>
					<Navbar user={user} />
					<div className="app-pages">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/films"
								element={<Films films={films} />}
							/>
							<Route
								path="/films/:id"
								element={<FilmDetails />}
							/>
						</Routes>
					</div>
				</Router>
			) : (
				<div>
					<Signup
						props={{
							handleSignup,
							setEmail,
							setUsername,
							setPassword,
						}}
					/>
					<Login props={{ handleLogin, setUsername, setPassword }} />
				</div>
			)}
		</div>
	);
};

export default App;
