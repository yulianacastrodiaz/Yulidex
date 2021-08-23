import React from "react";
import Pokemons from "../Pokemons/Pokemons"
import s from "./Home.module.css"

export default function Home(){
  return(
    <div className={s.home}>
      <div className={s.buttons}>
      <button>sort</button>
      <button>A-Z</button>
      <button>Z-A</button>
      </div>
      <Pokemons></Pokemons>
    </div>
  )
}