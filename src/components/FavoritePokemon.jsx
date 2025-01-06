const FavoritePokemon = ({ favorites }) => {
	return (
		<div className="favorite-pokemon">
			{favorites.length === 0 ? (
				<p>No favorites yet.</p>
			) : (
				favorites.map((pokemon) => (
					<div key={pokemon.name} className="pokemon-card">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
							alt={pokemon.name}
						/>
						<h3>{pokemon.name}</h3>
					</div>
				))
			)}
		</div>
	);
};

export default FavoritePokemon;
