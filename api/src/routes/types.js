const { Router } = require('express');
const { Type } = require('../db');
const fetch = require('node-fetch');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const data = await response.json();
    const types = data.results.map( async (t) => {
      const type = await Type.findOne({ where: { name: t.name } })
      if (type === null) {
        await Type.create({
          name: t.name
        });
      }
    });
    Promise.all(types)
      .then(async () => {
        const typesDb = await Type.findAll();
        return typesDb;
      })
      .then((data) => res.json(data))
  } catch (error) {
    res.status(404).json(error)
  }
})

module.exports = router;