import React from 'react';
import './styles/TodoSearch.css';

function TodoSearch(props){
    return (
        <section className="todo-search--container">
            <input placeholder="Cortar la cebolla"></input>
        </section>
    );
};

export { TodoSearch };