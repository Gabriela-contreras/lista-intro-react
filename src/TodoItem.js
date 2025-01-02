import './TodoItem.css';
import './App.js'


function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.onCompleted && "Icon-check--active"}`}  onClick={()=> {console.log("click en tilde");
            }}
            >
                V
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
            ✖️
            </span>
        </li>
    );
}

export { TodoItem };