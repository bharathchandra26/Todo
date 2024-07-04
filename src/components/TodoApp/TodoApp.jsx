import React, { useState, useEffect } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './index.css';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
        if (storedTodoList) {
            setTodoList(storedTodoList);
        }
    }, []);

    const saveTodoListToLocalStorage = () => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    const deleteTodo = (todoId) => {
        const updatedTodoList = todoList.filter(todo => `todo${todo.uniqueNo}` !== todoId);
        setTodoList(updatedTodoList);
    };

    const toggleTodoStatus = (todoId) => {
        const updatedTodoList = todoList.map(todo => {
            if (`todo${todo.uniqueNo}` === todoId) {
                return { ...todo, isChecked: !todo.isChecked };
            }
            return todo;
        });
        setTodoList(updatedTodoList);
    };

    return (
        <div className="todos-bg-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="todos-heading">Todos</h1>
                        <h1 className="create-task-heading">
                            Create <span className="create-task-heading-subpart">Task</span>
                        </h1>
                        <TodoInput addTodo={addTodo} />
                        <h1 className="todo-items-heading">
                            My <span className="todo-items-heading-subpart">Tasks</span>
                        </h1>
                        <TodoList
                            todoList={todoList}
                            deleteTodo={deleteTodo}
                            toggleTodoStatus={toggleTodoStatus}
                        />
                        <button className="button" onClick={saveTodoListToLocalStorage}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;

