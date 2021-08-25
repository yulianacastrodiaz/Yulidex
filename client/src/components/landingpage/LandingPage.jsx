import React from "react";
import { NavLink } from "react-router-dom";
import s from "./LandingPage.module.css"

export function LandingPage(){
  return(
    <div className={s.LandingPage}>
      <img src="../img/landingpage/bg_blob.svg" alt="blobs background" id={s.bg_blob}></img>
      <img src="../img/landingpage/title_with_slogan.png" alt="titleandslogan" id={s.title}></img>
      <img src="../img/landingpage/bg_gray.svg" alt="bg_gray" id={s.gray}></img>
      <NavLink to="/home">
        <button id={s.go}>Go</button>
      </NavLink>
    </div> 
  )
}

export default LandingPage;