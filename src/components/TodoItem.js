import React from 'react';
import './styles/TodoItem.css'

function TodoItem(props){

    let classTodoItem = "todo-item--container";
    let classItemCheck = "list-item--check";

    if (props.completed === true){
        classTodoItem = "todo-item--container todo-item--completed"
        classItemCheck = "list-item--check todo-item--checkGreen"
    }

    const onClickCompleted = () =>{
        alert(`Ya completaste la tarea "${props.text}"`);

    }

    const onClickRemove = (msg) =>{
        alert(`Seguro que quieres remover la tarea "${msg}"`);
    }

    

    return (
        <li className={classTodoItem}>
            <span className={classItemCheck} onClick={onClickCompleted}></span>
            <p>{props.text}</p>
            <span className="list-item--close" onClick={() => onClickRemove(props.text)}></span>
        </li>
    );
};

export { TodoItem };