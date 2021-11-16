import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';

let todos = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false},
  { text: 'Pelas papas', completed: false},
  { text: 'Hacer curso de platzi', completed: false},
]

function App() {
  return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map(todos => (
            <TodoItem key={todos.text} text={todos.text} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
