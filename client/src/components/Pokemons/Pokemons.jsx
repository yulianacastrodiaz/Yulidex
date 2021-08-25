import React from "react"
import Pokemon from "../pokemon/Pokemon"
import s from "./Pokemons.module.css"
import { connect } from "react-redux"
import { getPokemons } from "../../actions/index"
import { useEffect } from 'react';

function Pokemons(props){

  useEffect(() => {
    props.getPokemons();
  },[]);

  return(
    <div className={s.pokemons}>
       <div className={s.pagination}>
        <button type="button"></button>
        <button type="button"></button>
      </div>
      { props.pokemons.length ? (
        props.pokemons.map((p) => {
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