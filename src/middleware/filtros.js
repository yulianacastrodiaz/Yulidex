export function sort(state, typeOfSort) {
  let namesOfPokemons = state.map(p => p.name);
  let sortPokemons = [];
  let attackOfPokemons = state.map(p => p.attack)

  if (typeOfSort === "A-Z") {
    namesOfPokemons = namesOfPokemons.sort()
    for (let i = 0; i < namesOfPokemons.length; i++) {
      for (let j = 0; j < state.length; j++) {
        if (namesOfPokemons[i] === state[j].name) {
          sortPokemons.push(state[j]);
          break;
        }
      }
    }
    return sortPokemons;
  } else if (typeOfSort === "Z-A") {
    namesOfPokemons = namesOfPokemons.sort().reverse()
    for (let i = 0; i < namesOfPokemons.length; i++) {
      for (let j = 0; j < state.length; j++) {
        if (namesOfPokemons[i] === state[j].name) {
          sortPokemons.push(state[j]);
          break;
        }
      }
    }
    return sortPokemons;
  } else if (typeOfSort === "Attack -") {
    attackOfPokemons = attackOfPokemons.sort((a, b) => a - b)
    for (let i = 0; i < attackOfPokemons.length; i++) {
      for (let j = 0; j < state.length; j++) {
        if (attackOfPokemons[i] === state[j].attack) {
          sortPokemons.push(state[j]);
        }
      }
    }
    sortPokemons = sortPokemons.filter((ele, indi) => sortPokemons.indexOf(ele) === indi)
    return sortPokemons;
  } else if (typeOfSort === "Attack +") {
    attackOfPokemons = attackOfPokemons.sort((a, b) => b - a)
    for (let i = 0; i < attackOfPokemons.length; i++) {
      for (let j = 0; j < state.length; j++) {
        if (attackOfPokemons[i] === state[j].attack) {
          sortPokemons.push(state[j]);
        }
      }
    }
    sortPokemons = sortPokemons.filter((ele, indi) => sortPokemons.indexOf(ele) === indi)
    return sortPokemons;
  } else if (typeOfSort === "Sort by:") {
    return state;
  }
}

export function sortTypes(state, type) {
  if (type === "Types") return state
  let pokemons = []
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].types.length; j++) {
      if (state[i].types[j].name === type) {
        pokemons.push(state[i])
        break;
      }
    }
  }

  return pokemons
}

export function sortCreate(state, creator) {
  if (creator === "Api") {
    return state.filter(p => !(isNaN(p.id)))
  } else if (creator === "Own") {
    let db = state.filter(p => isNaN(p.id))
    if (db.length) {
      return db
    } else {
      return {
        msg: "No has creado ningún pokemon."
      }
    }
  } else {
    return state
  }
}