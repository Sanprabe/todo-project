
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    
    // let generalTodos = [
    //   { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true},
    //   { text: 'Pelas papas', completed: false},
    //   { text: 'Hacer curso de platzi', completed: false},
    // ];
    
    // Set state for items
    const {
    item: todos, 
    saveItem:saveTodos, 
    loading, error} = useLocalStorage("TodosV1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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

    // 

    // Mark as completed

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

    // Remove from screen

    const onRemoved = (text) => {
        const indexItem = todos.findIndex((todo) => {
            return todo.text === text
        })
        let newTodo = [...todos];
        newTodo.splice(indexItem, 1);
        saveTodos(newTodo);
    }
    
    // Add Todo
    
    const addTodo = (text) => {
        let newTodo = [...todos];
        newTodo.push({
            "text": text,
            "completed": false

        });
        saveTodos(newTodo);
    }

    return (
        <TodoContext.Provider
            value={
                {
                loading,
                error,
                countTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                onComplete,
                onRemoved,
                addTodo,
                openModal,
                setOpenModal
                }
            }
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};