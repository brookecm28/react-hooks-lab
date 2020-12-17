import React, {useState} from 'react'

const AddTodo = props => {

    
   
    return (
    <div>
        <input 
        placeholder='Add a todo!' 
        value={props.userInput}
        onChange={(e) => props.setUserInput(e.target.value)}/>
        <button onClick={props.addToList}>Submit</button>
    </div>
    )}

export default AddTodo