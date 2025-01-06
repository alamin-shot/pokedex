import PokemonList from "../components/PokemonList";

const HomePage = ({ searchTerm }) => {
	return (
		<>
			<PokemonList searchTerm={searchTerm} />
		</>
	);
};

export default HomePage;
