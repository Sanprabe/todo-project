import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){

    const {searchValue ,setSearchValue} = React.useContext(TodoContext)

    const onSearchChangeValue = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <section className="todo-search--container">
            <input placeholder="Hacer la compra de ..." onChange={onSearchChangeValue} value={searchValue}></input>
        </section>
    );
};

export { TodoSearch };