const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require('axios')
const fetch = require('node-fetch');
const router = Router();

router.get("/", async (req, res) => {
  let { name } = req.query;
  console.log(name)
  try {
    if(name !== undefined) {
      const pokeDb = await Pokemon.findOne({ where: { name: name }, include: Type,})
      if(pokeDb) {
        res.json(pokeDb);
      } else if(pokeDb === null) {
        name = name.toLowerCase();
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const { types, id, sprites, weight, height, stats, base_experience} = response.data;
        const hp = stats[0].base_stat;
        const attack = stats[1].base_stat;
        const defense = stats[2].base_stat;
        const speed = stats[5].base_stat;
        const img = sprites.other.dream_world.front_default;
        const tipos = types.map(slot  => slot.type);
        const experience = base_experience;
        res.json({ name: response.data.name, types: tipos, id, img, weight, height, hp, attack, defense, speed, experience })
      } else {
        res.status(404).json({msg: "No se encontró el pokemon"})
      }
    } else {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      const responseNext = await fetch(data.next);
      const dataNext = await responseNext.json();
      let allPokemons = [];
      const info =  [...data.results, ...dataNext.results].map(async (p) => {
        const response2 = await fetch(p.url);
        const data2 = await response2.json();
        let types = data2.types.map(s => s.type)
          allPokemons.push({
            id: data2.id,
            name: data2.name,
            types,
            img:  data2.sprites.other.dream_world.front_default,
            height: data2.height,
            weight: data2.weight,
            attack: data2.stats[1].base_stat,
            experience: data2.base_experience,
          })
      })
      const pokemonsDb = await Pokemon.findAll({include: Type});
      let pokemonsMapped = pokemonsDb.map( p => {
        let typesDB = p.dataValues.types.map(t => {
          const type = {
            id: t.dataValues.id,
            name: t.dataValues.name,
          }
          return type;
        })
        const pokemon = {
          id: p.id,
          name: p.dataValues.name,
          types: typesDB,
          height: p.height,
          weight: p.weight,
          attack: p.attack,
        }
        return pokemon;
      }) 
      Promise.all(info)
        .then(() => {
          allPokemons = [...allPokemons, ...pokemonsMapped];
          res.json(allPokemons);
        });
    }
  } catch (error) {
    res.status(404).json(error)
  }
})

router.get("/:idPokemon", async (req, res) => {
  try {  
    let ID = req.params.idPokemon;
    if (ID.includes("-")) {
      let pokemon = await Pokemon.findOne({
        where: {
          id: ID,
        },
        include: Type,
      })
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