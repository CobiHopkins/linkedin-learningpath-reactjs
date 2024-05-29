import React from 'react';
import { useState } from 'react';

function Controlled() {

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = e => {
        e.preventDefault();
        alert(`Title: ${title} Color: ${color}`);
        setTitle("");
        setColor("#000000");
    }

    return (
        <form onSubmit={submit}>
            <input 
                value={title}
                onChange={event => setTitle(event.target.value)}
                type='text'
                placeholder='color title...'
            />

            <input
                value={color}
                onChange={event => setColor(event.target.value)}
                type='color' 
            />
            <button>Add</button>
        </form>
    )
}

export default Controlled;