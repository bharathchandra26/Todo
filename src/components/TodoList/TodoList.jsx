import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './index.css';

const TodoList = ({ todoList, deleteTodo, toggleTodoStatus }) => {
    return (
        <ul className="todo-items-container" id="todoItemsContainer">
            {todoList.map(todo => (
                <TodoItem
                    key={todo.uniqueNo}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodoStatus={toggleTodoStatus}
                />
            ))}
        </ul>
    );
};

export default TodoList;

