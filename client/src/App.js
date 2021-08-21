import './App.css';
import React from 'react';
import NavBar from "./components/navbar/NavBar.jsx";
import { Route } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from './components/home/Home';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/' component={LandingPage}/>
    </React.Fragment>
  );
}

export default App;
