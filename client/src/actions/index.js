export const getPokemons = () => async(dispatch) => {
  const response = await fetch("https://localhost:3001/pokemons");
  const data = await response.json();
  dispatch({
    type: "GET_POKEMONS",
    pokemons: data,
  })
}

