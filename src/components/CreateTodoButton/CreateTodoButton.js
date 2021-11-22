import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(){

    const { setOpenModal } = React.useContext(TodoContext);

    const onClick = () => {
            setOpenModal(prevState => !prevState);
        }

    return (
        <React.Fragment>
            <button className="todo-button" onClick={onClick}></button>
        </React.Fragment>
    );
};

export { CreateTodoButton };