import { useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import PokemonDetails from "./components/PokemonDetails.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [favorites, setFavorites] = useState([]);
	const location = useLocation();

	const handleFavorites = (pokemon) => {
		if (!favorites.find((fav) => fav.name === pokemon.name)) {
			setFavorites([...favorites, pokemon]);
		}
	};

	return (
		<>
			<Navbar />
			{location.pathname === "/" && (
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			)}
			<Routes>
				<Route path="/" element={<HomePage searchTerm={searchTerm} />} />
				<Route
					path="/pokemon/:name"
					element={<PokemonDetails onFavorite={handleFavorites} />}
				/>
				<Route
					path="favorites"
					element={<FavoritePage favorites={favorites} />}
				/>
			</Routes>
		</>
	);
};

export default App;
