import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';



function App() {
  
  let generalTodos = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true},
    { text: 'Pelas papas', completed: false},
    { text: 'Hacer curso de platzi', completed: false},
  ];
  
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(generalTodos);
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const countTodos = todos.length;

  let searchedTodos = [];
  
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }
  
  return (
      <React.Fragment>
        <TodoCounter completedTodos={completedTodos} countTodos={countTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodos.map(todos => (
            <TodoItem key={todos.text} text={todos.text} completed={todos.completed} />
          ))}
        </TodoList>
        <CreateTodoButton />
        <p>{searchValue}</p>
      </React.Fragment>
  );
}

export default App;
