import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css"

export function NavBar(){
  return(
    <div className={s.NavBar}>
      <div className={s.logo}>
        <NavLink to="/">
          <img src="../img/logo.svg" alt="logo-pokedex"  height="54px"></img>
          <img src="../img/logopokemon.svg" alt="textopokemon" height="54px"></img>
        </NavLink>
      </div>
      <div className={s.ul}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/types">Types</NavLink></li>
        <NavLink to="/login"><span className="material-icons md-light" id={s.hola}>login</span></NavLink>
      </div>
    </div>
  )
}

export default NavBar;