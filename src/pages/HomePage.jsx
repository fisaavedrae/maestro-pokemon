import React from 'react'
import NavBar from '../components/NavBar'

const HomePage = props => {
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
                        <h2>Bienvenido maestro Pokemón</h2>
                        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage