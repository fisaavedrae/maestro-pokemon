import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from '../components/context/MyContext'

import LoadingSpinner from '../components/LoadingSpinner'
import NavBar from '../components/NavBar'

const Pokemones = props => {
    const [verdetalle, setVerdetalle] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [ruta, setRuta] = useState('')
    const navigate = useNavigate();
    const { pokemones, nombrePokemon, setNombrePokemon, statPokemon, SetStatPokemon, fotoPokemon, setFotoPokemon } = useContext(MyContext)
    const { name } = useParams()

    const irAPokemon = () => {

        if (ruta != '' && ruta != 'pokemon') {
            setNombrePokemon(ruta)
            navigate(`/pokemones/${ruta}`);
            setVerdetalle(true)
            console.log('llamo api con: ', ruta)
            ReadAPI()
        }
        else { setRuta('pokemon') }

    };
    const handleChange = (event) => {
        console.log(`Seleccionaste ${event.target.value}`);
        setRuta(event.target.value);
    }

    async function ReadAPI() {
        let param = ''
        try {
            setIsLoading(true);
            console.log('name: ', name, 'ruta: ', ruta, 'param: ', param)
            if (name === 'pokemon' || name != ruta && ruta != 'Pokemones') {
                param = ruta
                console.log('llamo a api con ruta', ruta)
            }
            else {
                param = name
                console.log('llamo a api con name', name)
            }

            const rutaAPI = 'https://pokeapi.co/api/v2/pokemon/' + param
            console.log('param: ', param, 'rutaAPI: ', rutaAPI)
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + param)
            const data = await response.json()
            setFotoPokemon(data.sprites.other.home.front_default)
            SetStatPokemon(data.stats)
            setIsLoading(false)
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
                    <div className="col d-flex flex-column justify-content-center  align-items-center">
                        <h2>Selecciona un Pokemón</h2>
                        <select className="form-select mb-3 mt-3 w-25" aria-label="Default select example" onChange={handleChange}>
                            <option >Pokemones</option>
                            {pokemones.map(pokemon => {
                                return (
                                    <option value={pokemon.name} key={pokemon.name} > {pokemon.name}</option>
                                )
                            })}
                        </select>
                        <button type="button" className="btn btn-warning mt-3  w-25" onClick={irAPokemon} disabled={isLoading}>Ver Detalle</button>

                    </div>
                </div>
                {verdetalle &&
                    <div className="row">
                        <div className="col d-flex justify-content-center">

                            <div className="d-flex flex-row border w-50 pl-5 mt-4">
                                <div className="col d-flex flex-column justify-content-center  align-items-center">
                                    {console.log('fotopokemon: ', fotoPokemon)}
                                    {isLoading ? <LoadingSpinner /> : <img src={fotoPokemon} width="200px" height="200px" />}

                                </div>
                                <div className="col  text-start">
                                    <h3> {name}</h3>
                                    <ul className="list-group border-0 text-start" width="200px">
                                        {statPokemon.map(stat => {
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