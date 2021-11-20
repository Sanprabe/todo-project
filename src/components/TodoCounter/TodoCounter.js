import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter(){
    const {countTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <header className="aaaa">
            <h1>Has completado <br /><b>{completedTodos}</b> de <b>{countTodos}</b> tareas</h1>
        </header>
    );
};

export { TodoCounter };