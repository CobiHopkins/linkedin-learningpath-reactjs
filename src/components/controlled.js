import React from 'react';
import { useState } from 'react';

function useInput(initialValue) {
    //Custom hook for managing input state. 
    const [value, setValue] = useState(initialValue);
    return [
        {
            value, onChange: e=> setValue(e.target.value)
        },
        () => setValue(initialValue)
    ];
}

function Controlled() {

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${titleProps.value}, ${colorProps.value}`);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type='text'
                placeholder='color title...'
                required
            />

            <input
                {...colorProps}
                type='color' 
            />
            <button>Add</button>
        </form>
    )
}

export default Controlled;