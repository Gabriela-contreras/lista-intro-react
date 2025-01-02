import './TodoSearch.css';
import React from 'react';

function TodoSearch({ searchValue, setsearchValue }) {
    

    return (
        <input
            placeholder="Cortar cebolla"
            className="TodoSearch"
            value={searchValue}

            //uso del estado para saber el valor colocado en el input
            onChange={(event) => {
                setsearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };