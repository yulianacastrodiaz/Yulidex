import React from "react"
import Pokemon from "../pokemon/Pokemon"
import s from "./Pokemons.module.css"

export default function Pokemons(){
  return(
    <div className={s.pokemons}>
      <Pokemon></Pokemon>
      <Pokemon></Pokemon>
    </div>
  )
}