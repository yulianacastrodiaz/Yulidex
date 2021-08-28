const initialState = {
  pokemons: [],
  types: [],
  pokemonDetail: {},
  pages: 0,
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

  if(action.type === "SET_PAGES"){
    return{
      ...state,
      pages: action.value
    }
  }

  if(action.type === "GET_TYPES"){
    return{
      ...state,
      types: action.types
    }
  }

  if(action.type === "GET_POKEMONBYID"){
    return{
      ...state,
      pokemonDetail: action.pokemonById
    }
  }

  return state;
}