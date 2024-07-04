import React from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo, toggleTodoStatus}) => {
  const {text, uniqueNo, isChecked} = todo
  const checkboxId = `checkbox${uniqueNo}`
  const labelId = `label${uniqueNo}`
  const todoId = `todo${uniqueNo}`

  return (
    <li className="todo-item-container d-flex flex-row" id={todoId}>
      <input
        className="checkbox-input"
        type="checkbox"
        id={checkboxId}
        checked={isChecked}
        onChange={() => toggleTodoStatus(todoId)}
      />
      <div className="label-container d-flex flex-row">
        <label
          className={`checkbox-label ${isChecked ? 'checked' : ''}`}
          htmlFor={checkboxId}
          id={labelId}
        >
          {text}
        </label>
      </div>
      <div className="delete-icon-container ml-auto">
        <button className="delete-button" onClick={() => deleteTodo(todoId)}>
         <p>Delete</p>
        </button>
      </div>
    </li>
  )
}

export default TodoItem
