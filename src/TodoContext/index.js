import React from "react";
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const defaultTodos = [
        { text: 'Cortar cebolla', completed: true },
        { text: 'Tomar el Curso de Intro a React.js', completed: false },
        { text: 'Llorar con la Llorona', completed: false },
        { text: 'LALALALALA', completed: false },
        { text: 'Usar estados derivados', completed: true },
    ];

    // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    //estados modal
    const [openModal, setModal] = React.useState(false);




    // verifica cuantos todos estan completados 
    const completedTodos = todos.filter(
        // !!todo.completed es lo mismo que decir todo.completed == true
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;


    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false,
        });
        saveTodos(newTodos);
    }


    // mensaje de completados o no completados

    // const totalTodosCompleted = () => totalTodos === -1;
    // if (totalTodos === 0) {
    //   alert('No hay elementos en la lista');
    //   return [];
    // }



    // filtrar los todos que contengan el texto que se esta buscando
    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );


    // funcion para marcar un todo como completado
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };



    // funcion para eliminar un todo
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text == text
        );
        // splice elimina un elemento de un array
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completeTodo,
            deleteTodo,
            searchedTodos,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            openModal,
            setModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )

}

export { TodoContext, TodoProvider };