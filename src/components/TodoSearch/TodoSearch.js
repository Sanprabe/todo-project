import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue ,setSearchValue}){

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