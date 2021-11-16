import React from 'react';
import './styles/TodoList.css';

function TodoList(props){
    return (
        <section className="todo-list--container">
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export { TodoList };