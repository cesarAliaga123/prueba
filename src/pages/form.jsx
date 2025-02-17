import React, { useState } from 'react';

function Form() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Texto cambiado a: ${text}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <textarea 
                    value={text}
                    onChange={handleChange}
                    placeholder="Escribe el titulo aquí..."
                    rows="10"
                    cols="50"
                />
            </div>
            <div>
                <button className='bg-blue-900 rounded-sm p-3 text-white hover:bg-blue-700' type="submit">Cambiar</button>
            </div>
        </form>
    );
}

export default Form;