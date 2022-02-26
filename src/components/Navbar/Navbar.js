import { Link } from "react-router-dom";

export const Navbar = ({ user }) => {
	return (
		<nav>
			<h3>Ghibliverse</h3>
			<ul>
				<Link to="/"><li>Home</li></Link>
				<Link to="/films"><li>Films</li></Link>
				<li>{user ? user.user.username : "Profile"}</li>
			</ul>
		</nav>
	);
};
