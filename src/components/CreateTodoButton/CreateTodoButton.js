import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    return (
        <React.Fragment>
            <button className="todo-button" onClick={() => console.log('Clicked')}></button>
        </React.Fragment>
    );
};

export { CreateTodoButton };