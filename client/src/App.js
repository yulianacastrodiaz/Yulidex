import './App.css';
import React from 'react';
import NavBarin from "./components/navbar/NavBarin.jsx";
import { Route } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import Home from './components/home/Home';
import NavBarout from './components/navbar/NavBarout'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={NavBarin}/>
      <Route path="/home" component={NavBarout}/>
      <Route path="/create" component={NavBarout}/>
      <Route path="/types" component={NavBarout}/>
      <Route path='/home' component={Home}/>
      <Route exact path='/' component={LandingPage}/>
    </React.Fragment>
  );
}

export default App;
