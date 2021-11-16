import React from 'react';
import './styles/TodoItem.css'

function TodoItem(props){
    return (
        <li className="todo-item--container">
            <span className="list-item--check"></span>
            <p>{props.text}</p>
            <span className="list-item--close"></span>
        </li>
    );
};

export { TodoItem };