import './TodoItem.css';
import '../App/index'
import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";


function TodoItem(props) {
    
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onCompleted}>

                {/* son los iconos de check y delete que descargue de la pagina de react-icons */}
                <TiTick className='Icon-check-hover' />
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                <RxCrossCircled />
            </span>
        </li>
    );
}

export { TodoItem };