
import React, { useEffect } from 'react';

// estamos haciendo un metodo de encapsulamiento de codigo dentro de una function 
//  esto se llama custom hooks (nuestrea function comienza con use por convencion)
function useLocalStorage(itemName, inicialValue) {

    const [item, setItem] = React.useState(inicialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                // intenta obtener el item del localStorage
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                // si no hay item en el localStorage, lo crea con el valor inicial
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(inicialValue));
                    parsedItem = inicialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                // si todo sale bien, cambia el estado de loading a false
                setLoading(false);
                // si hay un error, cambia el estado de error a true
            } catch (error) {
                setLoading(false);
                setError(true);
            }
            // el tiempo de espera es de 2 segundos
        }, 2000);
    });




    // funcion para guardar los todos en localStorage
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);

    };
    return {
        item,
        saveItem,
        loading,
        error,
    };
}


export { useLocalStorage };
