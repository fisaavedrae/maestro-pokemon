import { useState } from 'react'

import './App.css'
import { MyContext } from './components/context/MyContext'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pokemones from './pages/Pokemones'
import ReadAPI from './components/ReadAPI'

function App() {
  const [pokemones, setPokemones] = useState([])
  const [fotoPokemon, setFotoPokemon] = useState([])
  const [statPokemon, SetStatPokemon] = useState([])
  const [nombrePokemon, setNombrePokemon] = useState("pokemon");

  return (
    <>

      <MyContext.Provider value={{ pokemones, setPokemones, nombrePokemon, setNombrePokemon, statPokemon, SetStatPokemon, fotoPokemon, setFotoPokemon }}>
        <ReadAPI />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemones/:name" element={<Pokemones />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App
