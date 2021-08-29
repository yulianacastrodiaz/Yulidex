import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Pokemon.module.css"

const iconsTypes = {
  "normal": "../img/types_icon/normal.svg",
  "fighting": "../img/types_icon/fight.svg",
  "flying": "../img/types_icon/flying.svg",
  "poison": "../img/types_icon/poison.svg",
  "ground": "../img/types_icon/ground.svg",
  "bug": "../img/types_icon/bug.svg",
  "ghost": "../img/types_icon/ghost.svg",
  "rock": "../img/types_icon/rock.svg",
  "fire": "../img/types_icon/fire.svg",
  "grass": "../img/types_icon/grass.svg",
  "steel": "../img/types_icon/steel.svg",
  "psychic": "../img/types_icon/psychic.svg",
  "ice": "../img/types_icon/ice.svg",
  "dragon": "../img/types_icon/dragon.svg",
  "water": "../img/types_icon/water.svg",
  "electric": "../img/types_icon/electric.svg",
  "dark": "../img/types_icon/dark.svg",
  "fairy": "../img/types_icon/fairy.svg",
  "shadow": "../img/types_icon/shadow.svg",
  "unknown": "../img/types_icon/unknown.svg",
}

export default function Pokemon ({ID, id, name, types, img, weight, height, attack, experience}){
  return(
    ID? (
    <div className={s[types?.[0].name]}>
      <div className={s.back}>
        <div className={s.header}>
          <NavLink to={`/home/${id}`}>
            <p id={s.name}>{name.toUpperCase()}</p>
          </NavLink>
          <div className={s.id}>
            <img src="../img/pokeball.svg" alt="pokeball" height="30px"></img>
            <p id={s.idnum}>{ID}</p>
          </div>
        </div>
        <img src={img} alt={name} height="130px" width="130px" id={s.img}></img>
      </div>
      <div className={s.front}>
        <div className={s.about}>
          <div className={s.descriptionlarger}>
            <p>Height
              <p className={s.num}>{height  < 10 ? `0.${height}m` : `${height/10}m`}</p>
            </p>
            <p>Type
              <div>
                {types?.map(t=>{
                 return <img src={iconsTypes[t.name]} alt={`icono ${t.name}`} height="30px"></img>
                })}
              </div>
            </p>
            <p>Weight
              <p className={s.num}>{`${weight/10}Kg`}</p>
            </p>
          </div>
          <div className={s.descriptionshort}>
            <p>Attack
              <p className={s.num}>{attack}</p>
            </p>
            <p>Experience
              <p className={s.num}>{experience}</p>
            </p> 
          </div>
        </div>
      </div>
    </div>
    ) : (
      <div className={s[types?.[0].name]}>
      <div className={s.back}>
        <div className={s.header}>
          <NavLink to={`/home/${id}`}>
            <p id={s.name}>{name?.toUpperCase()}</p>
          </NavLink>
          <div className={s.id}>
            <img src="../img/pokeball.svg" alt="pokeball" height="30px"></img>
            <p id={s.idnum}>{id}</p>
          </div>
        </div>
        <img src={img} alt={name} height="130px" width="130px" id={s.img}></img>
      </div>
      <div className={s.front}>
        <div className={s.about}>
          <div className={s.descriptionlarger}>
            <p>Height
              <p className={s.num}>{height  < 10 ? `0.${height}m` : `${height/10}m`}</p>
            </p>
            <p>Type
              <div>
                {types?.map(t=>{
                 return <img src={iconsTypes[t.name]} alt={`icono ${t.name}`} height="30px"></img>
                })}
              </div>
            </p>
            <p>Weight
              <p className={s.num}>{`${weight/10}Kg`}</p>
            </p>
          </div>
          <div className={s.descriptionshort}>
            <p>Attack
              <p className={s.num}>{attack}</p>
            </p>
            <p>Experience
              <p className={s.num}>{experience}</p>
            </p> 
          </div>
        </div>
      </div>
    </div>
    )
  )
}