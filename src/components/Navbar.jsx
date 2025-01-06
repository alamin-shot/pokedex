import { Link } from "react-router";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<Link to="/">HOME</Link>
				<Link to="/favorites">FAVORITES</Link>
			</nav>
		</>
	);
};

export default Navbar;
