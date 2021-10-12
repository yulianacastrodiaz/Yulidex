import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../actions";
import s from "./PokemonDetail.module.css"

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


export function PokemonDetail({getPokemonById, pokemonDetail}){
  let {id} = useParams();

  useEffect(() => {
    getPokemonById(id)
  },[]);

  return(
    pokemonDetail.img ? (
    <div className={s.fondo} key={pokemonDetail.id}>
      <h1 id={s.titulo} className={s.name}>{pokemonDetail.name}</h1>
      <img src={pokemonDetail.img} alt={`imagen de ${pokemonDetail.name}`} className="animate__backInDown" id={s.pokemon} height="200px"></img>
      <div className={s.description}>
        <div>
          <img src="../img/Pokemon Detail/attack.png" alt="attack" height="50px"></img>
          <p className={s.p}>Attack</p>
          <p className={s.p}>{pokemonDetail.attack}</p>
          <meter value={pokemonDetail.attack} min="0" low="30" high="170" optimum="100" max="200"></meter>
        </div>
        <div>
          <img src="../img/Pokemon Detail/heart.png" alt="heart" height="50px"></img>
          <p className={s.p}>Hp</p>
          <p className={s.p}>{pokemonDetail.hp}</p>
          <meter value={pokemonDetail.hp} min="0" low="20" high="70" optimum="100" max="180"></meter>
        </div>
        <div>
          <img src="../img/Pokemon Detail/defense.png" alt="defense" height="50px"></img>
          <p className={s.p}>Defense</p>
          <p className={s.p}>{pokemonDetail.defense}</p>
          <meter value={pokemonDetail.defense} min="0" low="20" high="80" optimum="100" max="150"></meter>
        </div>
        <div>
          <img src="../img/Pokemon Detail/speed.png" alt="speed" height="50px"></img>
          <p className={s.p}>Speed</p>
          <p className={s.p}>{pokemonDetail.speed}</p>
          <meter value={pokemonDetail.speed} min="0" low="20" high="80" optimum="50" max="150"></meter>
        </div>
        <div>
          <img src="../img/Pokemon Detail/height.png" alt="height" height="50px"></img>
          <p className={s.p}>Height</p>
          <p className={s.p}>{`${pokemonDetail.height/10}m`}</p>
          <meter value={pokemonDetail.height/10} min="0" low="0.5" high="3" optimum="1" max="5"></meter>
        </div>
        <div>
          <img src="../img/Pokemon Detail/weight.png" alt="weight" height="50px"></img>
          <p className={s.p}>Weight</p>
          <p className={s.p}>{`${pokemonDetail.weight/10}Kg`}</p>
          <meter value={pokemonDetail.weight/10} min="0" low="30" high="120" optimum="80" max="130"></meter>
        </div>
        <p className={s.p}>Types
          <div>
            {pokemonDetail.types?.map(t=>{
              return <img src={iconsTypes[t]} alt={`icono ${t}`} height="30px" className={s.img}></img>
            })}
          </div>
        </p>
      </div>
    </div>
    ) : (
        <div className={s.fondo} key={pokemonDetail.id}>
          <h1 id={s.titulo} className={s.name}>{pokemonDetail.name}</h1>
          <img src="../img/monster.svg" alt={`imagen de ${pokemonDetail.name}`} className="animate__backInDown" id={s.pokemon} height="200px"></img>
          <div className={s.description}>
            <div>
              <img src="../img/Pokemon Detail/attack.png" alt="attack" height="50px"></img>
              <p className={s.p}>Attack</p>
              <p className={s.p}>{pokemonDetail.attack}</p>
              <meter value={pokemonDetail.attack} min="0" low="30" high="170" optimum="100" max="200"></meter>
            </div>
            <div>
              <img src="../img/Pokemon Detail/heart.png" alt="heart" height="50px"></img>
              <p className={s.p}>Hp</p>
              <p className={s.p}>{pokemonDetail.hp}</p>
              <meter value={pokemonDetail.hp} min="0" low="20" high="70" optimum="100" max="180"></meter>
            </div>
            <div>
              <img src="../img/Pokemon Detail/defense.png" alt="defense" height="50px"></img>
              <p className={s.p}>Defense</p>
              <p className={s.p}>{pokemonDetail.defense}</p>
              <meter value={pokemonDetail.defense} min="0" low="20" high="80" optimum="100" max="150"></meter>
            </div>
            <div>
              <img src="../img/Pokemon Detail/speed.png" alt="speed" height="50px"></img>
              <p className={s.p}>Speed</p>
              <p className={s.p}>{pokemonDetail.speed}</p>
              <meter value={pokemonDetail.speed} min="0" low="20" high="80" optimum="50" max="150"></meter>
            </div>
            <div>
              <img src="../img/Pokemon Detail/height.png" alt="height" height="50px"></img>
              <p className={s.p}>Height</p>
              <p className={s.p}>{`${pokemonDetail.height/10}m`}</p>
              <meter value={pokemonDetail.height/10} min="0" low="0.5" high="3" optimum="1" max="5"></meter>
            </div>
            <div>
              <img src="../img/Pokemon Detail/weight.png" alt="weight" height="50px"></img>
              <p className={s.p}>Weight</p>
              <p className={s.p}>{`${pokemonDetail.weight/10}Kg`}</p>
              <meter value={pokemonDetail.weight/10} min="0" low="30" high="120" optimum="80" max="130"></meter>
            </div>
            <p className={s.p}>Types
              <div>
                {pokemonDetail.types?.map(t =>{
                  return <img src={iconsTypes[t.name]} alt={`icono ${t.name}`} height="30px" className={s.img}></img>
                })}
              </div>
            </p>
          </div>
        </div>
    )
  )
}

function mapStateToProps(state){
  return{
    pokemonDetail: state.pokemonDetail,
  }
}

function mapDispatchToProps(dispatch){
  return{
    getPokemonById: (id) => dispatch(getPokemonById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);