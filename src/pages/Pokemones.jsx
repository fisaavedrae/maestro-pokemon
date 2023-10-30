import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from '../components/context/MyContext'

import NavBar from '../components/NavBar'

const Pokemones = props => {
    const [verdetalle, setVerdetalle] = useState(false)
    const navigate = useNavigate();
    const { pokemones, nombrePokemon, setNombrePokemon, statPokemon, SetStatPokemon, fotoPokemon, setFotoPokemon } = useContext(MyContext)
    const { name } = useParams()

    console.log('name: ', name)

    const irAPokemon = () => {
        console.log('pokemon: ', nombrePokemon)
        navigate(`/pokemones/${nombrePokemon}`);
        setVerdetalle(true)
        ReadAPI()
    };
    const handleChange = (event) => {
        console.log(`Seleccionaste ${event.target.value}`);
        setNombrePokemon(event.target.value);
    }

    async function ReadAPI() {
        try {
            console.log('pokemonAPI: ', name)
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
            const data = await response.json()
            setFotoPokemon(data.sprites.front_default)
            SetStatPokemon(data.stats)
            console.log(statPokemon)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NavBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Selecciona un Pokemón</h2>
                        <select className="form-select mb-3" aria-label="Default select example" onChange={handleChange}>
                            <option >Pokemones</option>
                            {pokemones.map(pokemon => {
                                return (
                                    <option value={pokemon.name} key={pokemon.name} > {pokemon.name}</option>
                                )
                            })}
                        </select>
                        <button type="button" className="btn btn-warning mt-3" onClick={irAPokemon}>Ver Detalle</button>
                    </div>
                </div>

                {verdetalle &&
                    <div className="row">
                        <div className="col d-flex justify-content-center">

                            <div className="d-flex flex-row border w-50 pl-5 mt-3">
                                <div className="col">
                                    <img src={fotoPokemon} width="200px" height="200px" />
                                </div>
                                <div className="col">
                                    <h3> {name}</h3>
                                    <ul className="list-group border-0 text-start" width="200px">
                                        {statPokemon.map(stat => {
                                            console.log('stat.stat.name:', stat.stat.name)
                                            return (
                                                <li className="list-group-item border-0" key={stat.stat.name}>{stat.stat.name} - {stat.base_stat}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}


export default Pokemones