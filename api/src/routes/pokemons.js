const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require('axios')
const fetch = require('node-fetch');

const router = Router();

router.get("/", async (req, res) => {
  try {
    const newPokemon = await Pokemon.create({
      name: "Pikacho",
      hp: 2,
      attack: 45,
      defense: 21,
      speed: 56,
      height: 7,
      weight: 67,
    });
    const newType = await Type.create({
      name: "electric",
    });
    newPokemon.setTypes(newType)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const responseNext = await fetch(data.next);
    const dataNext = await responseNext.json();
    let fortyPokemons = [];
    const info = [...data.results, ...dataNext.results].map(async (p) => {
      const response2 = await fetch(p.url);
      const data2 = await response2.json();
      let types = data2.types.map(s => s.type)
      fortyPokemons.push({
        id: data2.id,
        name: data2.name,
        types,
        img:  data2.sprites.other.dream_world.front_default,
      })
    })
    const pokemonsDb = await Pokemon.findAll({include: Type});
    let {id, name, types} = pokemonsDb[0].dataValues;
    types.map(t => {

    })

    Promise.all(info)
      .then(() => {
        console.log(pokemonsDb[0].dataValues.types)
        // fortyPokemons = [...fortyPokemons, ...pokemonsDb]
        res.json(fortyPokemons)
      });
  } catch (error) {
    res.status(404).json(error)
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

router.post("/", async (req, res) => {
  let {name, types, hp, attack, defense, speed, height, weight} = req.body;
  const Regex = /[A-Z-a-z]/;
  try {
    if (Regex.test(name) && Array.isArray(types) && !isNaN(hp) && !isNaN(attack) && !isNaN(defense) && !isNaN(speed)) {
      const newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
      });
      newPokemon.setTypes(types);
      res.json({ msg: "Tu pokemons ha sido creado con éxito."});
    }
  } catch (error) {
    res.status(404).json(error);
  }
})


module.exports = router;