import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    //la funcion useContext nos permite acceder a los valores del contexto
    //en este caso accedemos a los valores de completedTodos y totalTodos
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return (
        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
    );
}

export { TodoCounter };