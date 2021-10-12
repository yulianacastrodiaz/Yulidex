import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../actions";
import s from "./CreatePokemon.module.css"

export default function CreatePokemon(props){
  const dispatch = useDispatch();
  const types = useSelector((store) => store.types);
  const [form, setForm] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const[errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes())
  },[])

  async function handleSubmit(e){
    e.preventDefault();
    const response = await fetch("http://localhost:3001/pokemons", {method: "POST",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
      body: JSON.stringify(form)})
    const data = await response.json()
    alert(data.msg)
    setForm({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    }) 
  }

  function validated(input){
    let error = {};
    if(!input.name) error.name = "No escribiste el nombre"
    return error;
  }
  validated(form.name)

  function handleChangeTypes(e){
    if(form.types.includes(e.target.value)){
      setForm({
        ...form,
        types: form.types.filter(t => t !== e.target.value)
      })
    } else {
      setForm({
        ...form,
        types: [...form.types, e.target.value]
      })
    }
  }

  function handleChange(e){
    if(e.target.name !== "name"){
      setForm({
        ...form,
        [e.target.name]: Number(e.target.value) <= 0 ? 0 : e.target.value
      })
    } else {
      setErrors(validated({
        ...form,
        [e.target.name]: e.target.value
      }))
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
  }

  return(
    <div className={s.create}>
      <form action="POST" onSubmit={handleSubmit} id={s.form}>
        <div className={s.form}>
          <h3>Crea tu Pokemon!</h3>
          <div className={s.grupo}>
            <input type="text" id={s.input} name="name" value={form.name} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>Name</label>
            {errors.name ? <p id={s.nombre}>Falta el nombre</p> : null}
          </div>
          <div className={s.grupo}>
            <input type="number" id={s.input} name="hp" value={form.hp} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>HP</label>
          </div>
          <div className={s.grupo}>
            <input type="number" id={s.input} name="attack" value={form.attack} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>Attack</label>
          </div>
          <div className={s.grupo}>
            <input type="number" id={s.input} name="defense" value={form.defense} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>Defense</label>
          </div>
          <div className={s.grupo}>
            <input type="number" id={s.input} name="speed" value={form.speed} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>Speed</label>
          </div>
          <div className={s.grupo}>
            <input type="number" id={s.input} name="height" value={form.height} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>Height(cm)</label>
          </div>
          <div className={s.grupo}>
            <input type="number" id={s.input} name="weight" value={form.weight} onChange={handleChange} required></input><span className={s.barra}></span>
            <label id={s.label}>Weight(gramos)</label>
          </div>
          <div className={s.types}>
            {
              types?.map(t => {
                return <div className={s.type}>
                  <input type="checkbox" name={t.name} value={t.id} id={t.id} onChange={handleChangeTypes} ></input>
                  <label htmlFor={t.id}>{t.name}</label>
                  {t.id % 10 === 0 ? <br/> : null}
                </div>
              })
            }
          </div>
          <button type="submit" id={s.boton}>Create</button>
        </div>  
      </form>
    </div>
  )
}

