import React from 'react';
import './TodoItem.css'

function TodoItem(props){

    let classTodoItem = "todo-item--container";
    let classItemCheck = "list-item--check";

    if (props.completed === true){
        classTodoItem = "todo-item--container todo-item--completed"
        classItemCheck = "list-item--check todo-item--checkGreen"
    }
    
    return (
        <li className={classTodoItem}>
            <span className={classItemCheck} onClick={props.onComplete}></span>
            <p>{props.text}</p>
            <span className="list-item--close" onClick={props.onRemoved}></span>
        </li>
    );
};

export { TodoItem };