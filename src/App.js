import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';
import react from 'react';


function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  react.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 2500);
  }, []);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {

// // Todos Exapmle
// let generalTodos = [
//   { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true},
//   { text: 'Pelas papas', completed: false},
//   { text: 'Hacer curso de platzi', completed: false},
// ];

  // Set state for items
  const {
    item: todos, 
    saveItem:saveTodos, 
    loading, error} = useLocalStorage("TodosV1", [])
  const [searchValue, setSearchValue] = React.useState("");
  
  // Code for Todo Counter
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const countTodos = todos.length;
  let searchedTodos = [];
  if(searchValue.length <= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  // Code for TodoItem -> Mark as complete

  const onComplete = (text) => {
    const indexItem = todos.findIndex((todo) => {
      return todo.text === text
    })
    let newTodo = [...todos];
    if (newTodo[indexItem].completed === true){
      newTodo[indexItem].completed = false;
    }else{
      newTodo[indexItem].completed = true;
    }
    saveTodos(newTodo);
  }

  // Code for TodoItem -> Remove item from todos

  const onRemoved = (text) => {
    const indexItem = todos.findIndex((todo) => {
      return todo.text === text
    })
    let newTodo = [...todos];
    newTodo.splice(indexItem, 1);
    saveTodos(newTodo);
  }
  
  
  return (
      <React.Fragment>
        <TodoCounter completedTodos={completedTodos} countTodos={countTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {error && <p>Error</p>}
          {loading && <p>Está cargando...</p>}
          {(!loading && !searchedTodos.length && !error) && <p>Crea tu primer Todo</p>}

          {searchedTodos.map(todos => (
            <TodoItem 
              key={todos.text}
              text={todos.text}
              completed={todos.completed}
              onComplete={() => onComplete(todos.text)}
              onRemoved={() => onRemoved(todos.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
