import {Switch, Route} from 'react-router-dom'
import React from 'react'
import PokemonList from './PokemonList'
import Pokemon from './Pokemon'

export default (
    <Switch>
        <Route exact path='/' component={PokemonList} />
        <Route exact path='/pokemon/:name' component={Pokemon} />
    </Switch>
)