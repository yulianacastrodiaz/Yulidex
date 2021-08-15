const { Router } = require('express');
const {Pokemon, Type} = require('../db');
// const Type = require('../models/Type');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let id = 1;

router.post("/prueba", async (req, res) => {
  const {name, vida, fuerza, defensa, velocidad, altura, peso} = req.body
  if (typeof name === "string") {
    var idletra = name.charAt(0)}
  // } else {
  //   res.status(404).json({msg: "El nombre no es un string"})
  // }
  try {
    // const newPokemon = await Pokemon.create({
    //   id: id + "a",
    //   vida,
    //   fuerza,
    //   defensa,
    //   velocidad,
    //   altura,
    //   peso
    // });
    const newType = await Type.create({name})
    id++
    res.json(newType)
  } catch (error) {
    console.log(id)
    id++
    res.status(404).send(error)
  }
})


module.exports = router;
