import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../components/context/MyContext'
import ubicacion from '../assets/ubicacion.png'

const NavBar = props => {
    const setActiveClass = ({ isActive }) => (isActive ? "nav-link link-warning" : "nav-link");
    const { nombrePokemon } = useContext(MyContext)
    const ruta = `/pokemones/${nombrePokemon}`;
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary mb-1 mt-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={ubicacion} alt="Bootstrap" height="60" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to='/' className={setActiveClass}>Home</NavLink>
                            <NavLink to={ruta} className={setActiveClass}  >Pokemones</NavLink>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBar