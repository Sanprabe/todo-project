import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { setOpenModal, addTodo} = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
        setNewTodoValue('');
        
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    return(
        <form className="todo-form--container" onSubmit={onAdd}>
            <label for="todo-form--input">Escribe tu <br/> nuevo TODO</label>
            <input id="todo-form--input" placeholder="Escribe el Todo" value={newTodoValue} onChange={onChange}></input>
            <div className="form-buttons--container">
                <button className="form-button--cancel" onClick={onCancel} type="button">Cancelar</button>
                <button className="form-button--add" onClick={onAdd} type="submit">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };