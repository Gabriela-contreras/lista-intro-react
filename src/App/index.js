import React from 'react';
import{useLocalStorage} from './useLocalStorage';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];



function App() {


  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // verifica cuantos todos estan completados 
  const completedTodos = todos.filter(
    // !!todo.completed es lo mismo que decir todo.completed == true
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;


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

return (<AppUI
completeTodo={completeTodo}
deleteTodo={deleteTodo}
searchedTodos={searchedTodos}
searchValue={searchValue}
setSearchValue={setSearchValue}
totalTodos={totalTodos}
completedTodos={completedTodos}
/>);

}

export default App;