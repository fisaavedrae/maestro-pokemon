import React, { useContext } from 'react'
import { useEffect } from "react";
import { MyContext } from './context/MyContext';


const ReadAPI = props => {
    const { pokemones, setPokemones } = useContext(MyContext)
    useEffect(() => {
        ReadAPI()
    }, [])
    async function ReadAPI() {
        try {

            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data = await response.json()

            setPokemones(data.results)
            console.log(pokemones)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <></>
    )
}


export default ReadAPI