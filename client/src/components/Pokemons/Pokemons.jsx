import React, { useState } from "react"
import Pokemon from "../pokemon/Pokemon"
import s from "./Pokemons.module.css"
import { connect } from "react-redux"
import { getPokemons } from "../../actions/index"
import { useEffect } from 'react';

function Pokemons(props){

  const [pages, setPages] = useState(0)

  useEffect(() => {
    props.getPokemons();
  },[]);
  
  function pagination(){
    if(props.pokemons.length) {
      return props.pokemons.slice(pages, pages + 12)
    } else {
      return []
    }
  }

  function next(){
    if(pages + 12 < props.pokemons.length){
      setPages(pages + 12)
    }
  }
  
  function previous(){
    if(pages > 0){
      setPages(pages - 12)
    }
  }
  
  var pokemonsPaginated = pagination();
  return(
    <div>
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
  )
}

function mapStateToProps(state){
  return{
    pokemons: state.pokemons
  }
}

function mapDispatchToProps(dispatch){
  return{
    getPokemons: () => dispatch(getPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons)