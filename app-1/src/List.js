import React from 'react'
import Todo from './Todo'

const List = props => {

    return (
    <div>
        <Todo tasks={props.tasks} />
    </div>
    )
}

export default List