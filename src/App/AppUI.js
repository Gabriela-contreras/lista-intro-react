import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { StateTodos } from '../StateTodos';
import { TodoForm } from '../TodoForm';


function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setModal,
    } = React.useContext(TodoContext);


    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && (
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                )}
                {error && <TodoError />}
                {(!loading && searchedTodos.length === 0) && <StateTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton
                onClick={()=> (setModal(!openModal))}
            />

            {openModal && (
                <Modal className="modal_Container">
                    {/* <p className='text_modal'>agregarTodo</p>
                    <button onClick={()=> setModal(false)}>Cerrar</button> */}
                    <TodoForm />

                </Modal>
            )}
        </>
    );
}

export { AppUI };