import React from "react";
import Pokemons from "../Pokemons/Pokemons"
import s from "./Home.module.css"
import { connect } from "react-redux";
import Pokemon from "../pokemon/Pokemon";

export function Home({pokemons}){
  return(
    <div className={s.home}>
      <div className={s.buttons}>
        <select name="Type">
          <option>Type</option>
        </select>
        <select>
          <option>Ascendant</option>
        </select>
        <select>
          <option>Falling</option>
        </select>
      </div>
      {
        pokemons.length === 1 && pokemons[0].name !== undefined ? (
          <div className={s.cardPokemon}>
            <Pokemon
            key={pokemons[0].id}
            id={pokemons[0].id}
            name={pokemons[0].name}
            types={pokemons[0].types}
            img={pokemons[0].img}
            height={pokemons[0].height}
            weight={pokemons[0].weight}
            attack={pokemons[0].attack}
            experience={pokemons[0].experience}
            ></Pokemon>
          </div>
        ) : (
          <Pokemons></Pokemons>
        )
      }
    </div>
  )
}

function mapStateToProps(state){
  return{
    pokemons: state.pokemons
  }
}

export default connect(mapStateToProps, null)(Home);