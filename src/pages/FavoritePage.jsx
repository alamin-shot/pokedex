import FavoritePokemon from "../components/FavoritePokemon";

const FavoritePage = ({ favorites }) => {
	return (
		<>
			<h1>Favorites</h1>
			<FavoritePokemon favorites={favorites} />
		</>
	);
};

export default FavoritePage;
