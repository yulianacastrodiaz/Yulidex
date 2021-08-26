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

  if(action.type === "GET_POKEMON"){
    return{
      ...state,
      pokemons: [action.pokemon]
    }
  }

  return state;
}