import React from "react";
import Pokemons from "../Pokemons/Pokemons"
import s from "./Home.module.css"

export default function Home(){
  return(
    <div className={s.home}>
        <Pokemons></Pokemons>
    </div>
  )
}

