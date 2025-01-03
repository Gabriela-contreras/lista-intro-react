
import React from 'react';

// estamos haciendo un metodo de encapsulamiento de codigo dentro de una function 
//  esto se llama custom hooks (nuestrea function comienza con use por convencion)
function useLocalStorage(itemName, inicialValue) {
    const localStorageTodos = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageTodos) {
        localStorage.setItem(itemName, JSON.stringify(inicialValue));
        parsedItem = inicialValue;
    } else {
        parsedItem = JSON.parse(localStorageTodos);
    }

    const [item, setItem] = React.useState(parsedItem);


    // funcion para guardar los todos en localStorage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    return [item, saveItem]
}


export { useLocalStorage };
