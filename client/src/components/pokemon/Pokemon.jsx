import React from "react";
import s from "./Pokemon.module.css"

export default function Pokemon (){
  return(
    <div className={s.pokemon}>
      <div className={s.back}>
        <div className={s.header}>
          <p id={s.name}>BULBASAUR</p>
          <div className={s.id}>
            <img src="../img/pokeball.svg" alt="pokeball" height="30px"></img>
            <p id={s.idnum}>1</p>
          </div>
        </div>
        <img src="../img/bulbasaurimg.svg" alt="bulbasaur" height="130px" width="130px" id={s.img}></img>
      </div>
      <div className={s.front}>
        <div className={s.about}>
          <div className={s.descriptionlarger}>
            <p>Height
              <p>1</p>
            </p>
            <p>Type
              <div>
                <img src="../img/pokebola.png" alt="prueba" height="30px"></img>
                <img src="../img/pokebola.png" alt="prueba" height="30px"></img>
                <img src="../img/pokebola.png" alt="prueba" height="30px"></img>

              </div>
            </p>
            <p>Weight
              <p>69</p>
            </p>
          </div>
          <div className={s.descriptionshort}>
            <p>Attack
              <p>49</p>
            </p>
            <p>Caught</p> 
          </div>
        </div>
      </div>
    </div>
  )
}