import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css"

export function NavBar(){
  return(
    <div className={s.NavBar}>
      <div className={s.logo}>
        <img src="../img/bulbasaur.svg" alt="logo-pokedex"  height="48px" ></img>
      </div>
      <div className={s.ul}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/types">Types</NavLink></li>
        <li><NavLink to="/login">Log in</NavLink></li>
      </div>
    </div>
  )
}

export default NavBar;