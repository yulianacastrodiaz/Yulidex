const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: {}
};

export default function rootReducer(state = initialState, action) {
  if(action.type === "GET_POKEMONS"){
    return{
      ...state,
      pokemons: action.pokemons
    }
  }

  return state;
}