import './App.css';
import React from 'react';
import NavBarin from "./components/navbar/NavBarin.jsx";
import { Route } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from './components/home/Home';
import NavBarout from './components/navbar/NavBarout'
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import CreatePokemon from './components/createPokemon/CreatePokemon';
// import Pokemon from './components/pokemon/Pokemon';
// import Pokemons from './components/Pokemons/Pokemons';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/home/:id">
        <NavBarout></NavBarout>
        <PokemonDetail></PokemonDetail>
      </Route>
      <Route exact path='/' component={NavBarin}/>
      <Route path="/create">
        <NavBarout></NavBarout>
        <CreatePokemon></CreatePokemon>
      </Route>
      <Route path="/types" component={NavBarout}/>
      <Route exact path='/home'>
        <NavBarout></NavBarout>
        <Home></Home>
      </Route>
      <Route exact path='/' component={LandingPage}/>
    </React.Fragment>
  );
}

export default App;
