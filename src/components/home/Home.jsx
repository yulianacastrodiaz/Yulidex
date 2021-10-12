import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTypes } from "../../actions";
import Pokemons from "../Pokemons/Pokemons"
import s from "./Home.module.css"

export function Home(props){
  useEffect(() => {
    props.getTypes()
  },[])

  return(
    <div className={s.home}>
        <Pokemons ></Pokemons>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return{
    getTypes: () => dispatch(getTypes()),
  }
}

export default connect(null, mapDispatchToProps)(Home);