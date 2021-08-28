import React, { useState } from "react"
import Pokemon from "../pokemon/Pokemon"
import s from "./Pokemons.module.css"
import { connect } from "react-redux"
import { setPages } from "../../actions/index"
import { useEffect } from 'react';
import { sort, sortCreate, sortTypes } from "../../middleware/filtros"

function Pokemons({ types, pokemons, pages, setPages }){
  const [sortPokemons, setSortPokemons] = useState([])

  useEffect(() => {
    // console.log(pokemons)
    setSortPokemons(pokemons)
    setPages(0)
  },[pokemons]);
  
  function pagination(){
    if(sortPokemons.length) {
      return sortPokemons.slice(pages, pages + 12);
    } else {
      return [];
    }
  }

  function next(){
    if(pages + 12 < sortPokemons.length){
      setPages(pages + 12)
    }
  }
  
  function previous(){
    if(pages > 0){
      setPages(pages - 12)
    }
  }

  let pokemonsPaginated = pagination();

  function handleChangeCreate(e){
    let pokemonsSortByCreate = sortCreate(pokemons, e.target.value);
    setSortPokemons(pokemonsSortByCreate);
  }
  function handleChange(e){
    let pokemons2 = sort(sortPokemons, e.target.value);
    setSortPokemons(pokemons2);
  }

  function handleChangeTypes(e){
    let sortPokemonsForTypes = sortTypes(sortPokemons, e.target.value);
    if(sortPokemonsForTypes.length){
      setSortPokemons(sortPokemonsForTypes)
    } else {
      alert("El tipo que estás buscando no está entre los pokemones traídos")
    }
  }

  return(
    pokemons[0]?.message ? (
      <p>BUSCA BIEN GILI</p>
    ) : (
    <div>
      <div className={s.buttons}>
        <select name="Type" onChange={(e) => handleChangeTypes(e)}>
          <option value="Types">Types</option>
          {
            types.map(t => {
             return <option value={t.name}>{t.name}</option>
            })
          }
        </select>
        <select name="Sort by" onChange={(e) => handleChange(e)}>
          <option value="Sort by:">Sort by:</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Attack +">Attack +</option>
          <option value="Attack -">Attack -</option>
        </select>
        <select name="Created by" onChange={(e) => handleChangeCreate(e)}>
          <option value="Created by:">Created by:</option>
          <option value="Own">Own</option>
          <option value="Api">Api</option>
        </select>
      </div>
    <div className={s.pagination}>
      <button type="button" onClick={previous} id={s.previous}>&laquo; previous</button>
      <button type="button" onClick={next} id={s.next}>next &raquo;</button>
    </div>
    <div className={s.pokemons}>
      { pokemonsPaginated.length ? (
        pokemonsPaginated.map((p) => {
          return <Pokemon
            key={p.id}
            id={p.id}
            name={p.name}
            types={p.types}
            img={p.img}
            height={p.height}
            weight={p.weight}
            attack={p.attack}
            experience={p.experience}
            ></Pokemon>
        })
        )
        : (
          <img src="../img/loading2.gif" alt="loading" id={s.loading} height="150px"></img>
        )}
    </div>
    </div>
  ))
}

function mapStateToProps(state){
  return{
    pokemons: state.pokemons,
    pages: state.pages,
    types: state.types,
  }
}

function mapDispatchToProps(dispatch){
  return{
    setPages: (value) => dispatch(setPages(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons)