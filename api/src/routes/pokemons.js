const { Router } = require('express');
const { Pokemon } = require('../db');
const axios = require('axios')
const fetch = require('node-fetch');

const router = Router();

router.get("/", (req, res) => {
  try {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => console.log(response))
      // .then((results) => {console.log(results)});
  } catch (error) {
    console.log(error)
  }
})
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
const ciudad = 'londres'
router.get("/:idPokemon", (req, res) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then(re => console.log(re))
    res.send(req.params.idPokemon)
})

module.exports = router;