import './App.css';
import List from './List'
import AddTodo from './AddTodo'
import React, {useState} from 'react'

function App() {

const [tasks, setTasks] = useState([])
const [userInput, setUserInput] = useState('')

function addToList() {
    const newList = [...tasks, userInput]
    setTasks(newList)
    setUserInput('')
}

  return (
    <div className="App">
      <AddTodo addToList={addToList} userInput={userInput} setUserInput={setUserInput} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
