import './App.css';
import React, {useState, useEffect} from 'react'
import ListItem from './ListItem';
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
          setPokemon(res.data.results)
          console.log(pokemon)
      })
  })

  return (
    <div className="App">
      {pokemon.map((poke, index) => {
        return <ListItem name={poke.name} key={index} />
      })}
    
    </div>
  );
}

export default App;
