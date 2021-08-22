import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBarout.module.css"

export function NavBarout(){
  return(
    <div className={s.NavBar}>
      <div className={s.logo}>
        <NavLink to="/">
          <img src="../img/logo.svg" alt="logo-pokedex"  height="54px"></img>
          <img src="../img/logopokemon.svg" alt="textopokemon" height="54px"></img>
        </NavLink>
      </div>
      <div>
        <form className={s.wrap}>
          <div className={s.search}>
            <input type="text" className={s.searchTerm} placeholder="Buscar pokemons..."></input>
            <button type="submit" className={s.searchButton}>
            <span className="material-icons" id={s.searchicon}>search</span>
            </button>
          </div> 
        </form> 
      </div>
      <div className={s.ul}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/types">Types</NavLink></li>
        <NavLink to="/logout"><p className="material-icons md-light" id={s.logout}>logout</p></NavLink>
      </div>
    </div>
  )
}

export default NavBarout;