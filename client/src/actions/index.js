export const getPokemons = () => async(dispatch) => {
  const response = await fetch("http://localhost:3001/pokemons");
  const data = await response.json();
  return dispatch({
    type: "GET_POKEMONS",
    pokemons: data,
  })
}



