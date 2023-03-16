import React, { useState } from "react";

const PokeAPI = () => {
  const [NombrePokemon, setNombrePokemon] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const handleSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${NombrePokemon}`)
      .then((response) => response.json())
      .then((data) => setPokemonInfo(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="my-5">
      <h2>Pokémon: Conexión al PokeAPI</h2>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          onClick={handleSearch}>
            Buscar Pokémon
        </button>
        <input
          placeholder="Introduzca el nombre del Pokémon"
          className="form-control"
          type="text"
          value={NombrePokemon}
          onChange={(e) => setNombrePokemon(e.target.value)}
        />
      </div>
      {pokemonInfo && (
        <div className="card shadow p-4">
          <img className="card-img-top"
            src={pokemonInfo.sprites.front_default}
            alt={pokemonInfo.name}
          />
          <div className="card-body text-center">
            <h2 className="card-title">{pokemonInfo.name}</h2>
            <p className="card-text">Altura: {pokemonInfo.height}</p>
            <p className="card-text">Peso: {pokemonInfo.weight}</p>
            <p className="card-text">Poderes:</p>
          </div>
          <ul className="list-group">
            {pokemonInfo.abilities.map((ability) => (
              <li className="list-group-item text-center"
                key={ability.ability.name}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokeAPI;
