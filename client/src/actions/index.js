export const getPokemons = () => async(dispatch) => {
  const response = await fetch("http://localhost:3001/pokemons");
  const data = await response.json();
  dispatch({
    type: "GET_POKEMONS",
    pokemons: data,
  })
};

export const getPokemon = (name) => async(dispatch) => {
  const response = await fetch(`http://localhost:3001/pokemons?name=${name}`);
  const data = await response.json();
  dispatch({
    type: "GET_POKEMON",
    pokemon: data
  })
}

export const setPages = (value) => {
  return {
    type: "SET_PAGES",
    value
  }
}

export const getTypes = () => async(dispatch) => {
  const response = await fetch(`http://localhost:3001/types`);
  const types = await response.json();
  dispatch({
    type: "GET_TYPES",
    types
  })
}

export const getPokemonById = (id) => async(dispatch) => {
  const response = await fetch (`http://localhost:3001/pokemons/${id}`);
  const pokemonById = await response.json();
  dispatch({
    type:"GET_POKEMONBYID",
    pokemonById
  })
}



