import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        addTodo,
        setModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setModal(false);
    };


    const onCancel = () => {
        setModal(false);
        // setNewTodoValue('');
    };



    const onChange = (event) => {
        const text = event.target.value;
        setNewTodoValue(text);
        // setNewTodoValue('');
    };


    return (
        <form className="TodoFormContainer" onSubmit={onSubmit}>
            <label className="title"
            >Escribe tu Todo </label>
            <textarea type="text"
                placeholder="Escribe tu tarea"
                className="TodoTextArea"
                value={newTodoValue} 
                onChange={onChange}/>

            <div className="TodoFormButtons">
                <button
                    className="TodoFormButton  cancel"
                    onClick={onCancel}
                >cancelar</button>
                <button
                    className="TodoFormButton  add"
                    type="submit"
                    onClick={(event) => {
                    }}
                >añadir</button>
            </div>


        </form>
    )
}



export { TodoForm };