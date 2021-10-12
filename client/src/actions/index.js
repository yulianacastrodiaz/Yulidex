export const getPokemons = () => async (dispatch) => {
  const response = await fetch("https://yulidex-db.herokuapp.com/pokemons");
  const data = await response.json();
  dispatch({
    type: "GET_POKEMONS",
    pokemons: data,
  })
};

export const getPokemon = (name) => async (dispatch) => {
  const response = await fetch(`https://yulidex-db.herokuapp.com/pokemons?name=${name}`);
  const pokemon = await response.json();
  dispatch({
    type: "GET_POKEMON",
    pokemon
  })
}

export const setPages = (value) => {
  return {
    type: "SET_PAGES",
    value
  }
}

export const getTypes = () => async (dispatch) => {
  const response = await fetch(`https://yulidex-db.herokuapp.com/types`);
  const types = await response.json();
  dispatch({
    type: "GET_TYPES",
    types
  })
}

export const getPokemonById = (id) => async (dispatch) => {
  const response = await fetch(`https://yulidex-db.herokuapp.com/pokemons/${id}`);
  const pokemonById = await response.json();
  dispatch({
    type: "GET_POKEMONBYID",
    pokemonById
  })
}



