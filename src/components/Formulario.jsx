import React, { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [resultado, setResultado] = useState('');

    const nombreRef = React.createRef();
    const apellidoRef = React.createRef();


    const controlClick = (event) => {
        setResultado(`${nombreRef.current.value} ${apellidoRef.current.value}`);
    }

    return(
        <div className="Formulario">
            <header className="Formulario-header">
                <h1>Formulario en React</h1>
                <input placeholder="Introduce tu nombre" ref={nombreRef} onKeyPress={controlClick}></input>
                <input placeholder="Introduce tu apellido" ref={apellidoRef} onChange={(e)=>{setApellido(e.target.value)}}></input>
                <button onClick={controlClick}>Mostrar resultados</button>
                <strong>{resultado}</strong>
            </header>
        </div>
    )
}

export default Formulario;