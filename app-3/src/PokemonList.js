import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

const PokemonList = props => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
            setPokemon(res.data.results)
        })
    }, [])

    return (
    <div>
        {pokemon.map((poke) => {
         return(
            <Link to={`/pokemon/${poke.name}`} key={poke.url}>
                <h2>{poke.name}</h2>
            </Link>
         )})}
    </div>)
}

export default PokemonList