import React from "react";
import { NavLink } from "react-router-dom";
import s from "./LandingPage.module.css"

export function LandingPage(){
  return(
    <div className={s.LandingPage}>
      <img src="../img/option_1.png" id={s.pokemon} alt="" ></img>
      {/* <NavLink to="/home">
        <button id={s.go}>Go</button>
      </NavLink> */}
    </div> 
  )
}

export default LandingPage;