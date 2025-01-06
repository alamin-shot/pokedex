import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import extractNumberFromUrl from "../utilis/extractNumber";
const PokemonList = ({ searchTerm }) => {
	const [pokeList, setPokeList] = useState([]);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=50")
			.then((res) => {
				const promises = res.data.results.map((pokemon) => ({
					...pokemon,
					id: extractNumberFromUrl(pokemon.url),
				}));
				Promise.all(promises).then((pokemons) => setPokeList(pokemons));
			})
			.catch((err) => console.error(err));
	}, []);

	const filteredPokemon = pokeList.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<>
			<div className="pokemon-list">
				{filteredPokemon.map((pokemon, index) => (
					<div key={index} className="pokemon-card">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
							alt={pokemon.name}
						/>
						<h3>{pokemon.name}</h3>
						<Link to={`/pokemon/${pokemon.name}`}>View Details</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default PokemonList;
