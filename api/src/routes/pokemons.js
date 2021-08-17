const { Router } = require('express');
const { Pokemon } = require('../db');
const axios = require('axios')
const fetch = require('node-fetch');

const router = Router();

router.get("/", (req, res) => {
  try {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => res.json(data))
  } catch (error) {
    res.json(error)
  }
})

router.get("/:idPokemon", async (req, res) => {
  try {  
    let ID = req.params.idPokemon;
    if (ID.includes("-")) {
      let pokemon = await Pokemon.findByPk(ID)
      res.json(pokemon) 
    } else {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ID}`)
      const { name, types, id, sprites, weight, height, stats} = response.data;
      const hp = stats[0].base_stat;
      const attack = stats[1].base_stat;
      const defense = stats[2].base_stat;
      const speed = stats[5].base_stat;
      const img = sprites.other.dream_world.front_default;
      const tipos = types.map(slot  => slot.type.name);
      res.json({name, tipos, id, img, weight, height, hp, attack, defense, speed })
    }
  } catch (error) {
    res.status(404).json(error)
  }
})

module.exports = router;