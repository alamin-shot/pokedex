import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import pokeball from "../images/pokeball.png";

const PokemonDetails = ({ onFavorite }) => {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => setPokemon(res.data))
			.catch((err) => console.error(err));
	}, [name]);

	if (!pokemon)
		return (
			<div className="loading_state">
				<img src={pokeball} alt="" />
				<h1>Gotta Catch `Em All!</h1>
			</div>
		);

	return (
		<div className="pokemon-details">
			<h1>{pokemon.name}</h1>
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			<p>
				<strong>Abilities: </strong>
				{pokemon.abilities.map((a) => a.ability.name).join(", ")}
			</p>
			<p>
				<strong>Types: </strong>
				{pokemon.types.map((t) => t.type.name).join(", ")}
			</p>

			<ul>
				<p>
					<strong>Base Stats:</strong>
				</p>
				{pokemon.stats.map((stat) => (
					<li key={stat.stat.name}>
						{stat.stat.name}: {stat.base_stat}
					</li>
				))}
			</ul>
			<button onClick={() => onFavorite(pokemon)}>Favorite</button>
		</div>
	);
};

export default PokemonDetails;
