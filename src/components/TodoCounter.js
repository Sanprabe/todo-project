import React from 'react';
import './styles/TodoCounter.css'

function TodoCounter({completedTodos, countTodos}){
    return (
        <header className="aaaa">
            <h1>Has completado <br /><b>{completedTodos}</b> de <b>{countTodos}</b> tareas</h1>
        </header>
    );
};

export { TodoCounter };