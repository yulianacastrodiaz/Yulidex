import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBarout.module.css";
import { connect } from "react-redux";
import { getPokemon, getPokemons, setPages } from "../../actions";

export function NavBarout(props){
  const [namePokemon, setNamepokemon] = useState("");

  useEffect(() => {
    props.getPokemons()
  },[])

  function handleChange(e){
    setNamepokemon(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(namePokemon !== ""){
      props.getPokemon(namePokemon)
    } else {
      props.getPokemons()
    }
    props.setPages(0)
    setNamepokemon('')
  }

  return(
    <div className={s.NavBar}>
      <div className={s.logo}>
        <NavLink to="/">
          <img src="../img/logo.svg" alt="logo-pokedex"  height="54px"></img>
          <img src="../img/logopokemon.svg" alt="textopokemon" height="54px"></img>
        </NavLink>
      </div>
      <div>
        <form className={s.wrap} onSubmit={(e) => handleSubmit(e)}>
          <div className={s.search}>
            <input type="text" 
            className={s.searchTerm} 
            placeholder="Buscar pokemons..."
            value={namePokemon}
            onChange={(e) => handleChange(e)}
            ></input>
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

function mapDispatchToProps(dispatch){
  return{
    getPokemon: (name) => dispatch(getPokemon(name)),
    getPokemons: () => dispatch(getPokemons()),
    setPages: (value) => dispatch(setPages(value))
  }
}

export default connect(null, mapDispatchToProps)(NavBarout);