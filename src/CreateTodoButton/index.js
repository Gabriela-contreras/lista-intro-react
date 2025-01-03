import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" onClick={()=> console.log("le diste click al boton ")}>+</button>
    );
}

export { CreateTodoButton };