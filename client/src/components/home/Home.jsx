import React from "react";
import Pokemons from "../Pokemons/Pokemons"
import s from "./Home.module.css"

export default function Home(){
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
      <Pokemons></Pokemons>
    </div>
  )
}