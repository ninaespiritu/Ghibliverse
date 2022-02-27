import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({ user }) => {
	return (
		<nav>
			<div className="navbar">
				<h3>Ghibliverse</h3>
				<ul className="navbar-menu">
					<Link to="/">
						<li className="navbar-item">Home</li>
					</Link>
					<Link to="/films">
						<li className="navbar-item">Films</li>
					</Link>
					<li>{user ? user.user.username : "Profile"}</li>
				</ul>
			</div>
		</nav>
	);
};
