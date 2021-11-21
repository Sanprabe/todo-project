import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(){

    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const onClick = () => {
        if(!openModal){
            setOpenModal(true);
        }else{
            setOpenModal(false);
        }
    }

    return (
        <React.Fragment>
            <button className="todo-button" onClick={onClick}></button>
        </React.Fragment>
    );
};

export { CreateTodoButton };