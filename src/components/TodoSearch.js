import React from 'react';
import './styles/TodoSearch.css';

function TodoSearch({searchValue ,setSearchValue}){

    const onSearchChangeValue = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <section className="todo-search--container">
            <input placeholder="Hacer la compra de ..." onChange={onSearchChangeValue} value={searchValue}></input>
        </section>
    );
};

export { TodoSearch };