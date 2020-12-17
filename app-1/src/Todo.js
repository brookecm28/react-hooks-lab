import React from 'react'
import AddTodo from './AddTodo'

const Todo = props => {
    return <div>{props.tasks.map((tasks, index) => (
        <h2 key={index}>{tasks}</h2>
    ))}</div>
}

export default Todo