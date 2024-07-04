import React, {useState} from 'react'
import './index.css'

const TodoInput = ({addTodo}) => {
  const [userInput, setUserInput] = useState('')

  const handleInputChange = e => {
    setUserInput(e.target.value)
  }

  const handleAddTodo = () => {
    if (userInput.trim() === '') {
      alert('Enter Valid Text')
      return
    }

    const newTodo = {
      text: userInput,
      uniqueNo: Date.now(),
      isChecked: false,
    }

    addTodo(newTodo)
    setUserInput('')
  }

  return (
    <div>
      <input
        type="text"
        id="todoUserInput"
        className="todo-user-input"
        placeholder="What needs to do"
        value={userInput}
        onChange={handleInputChange}
      />
      <button className="button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  )
}

export default TodoInput
