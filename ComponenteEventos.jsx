import React, { useState } from "react";

const ComponenteEventos = () => {

    const [teclaPress, setTeclaPress] = useState('');
    const [teclaDown, setTeclaDown] = useState('');

    const manejarPulsacionesTeclado = (event) => {
        setTeclaPress(event.target.value);
        // console.log(event)
    }

    const manejarDown = (event) => {
        if (event.key === '8') {
            console.log(event)
            setTeclaDown(teclaDown.slice(0,-1));
            (event.target.value) = teclaDown;
        } else {
            setTeclaDown(event.target.value);
            console.log(event)
        }       
    }

    return(
        <div className="App">
            <header className="App-header">
                <input placeholder="Pulsar una tecla (Press)" onKeyPress={manejarPulsacionesTeclado}></input>
                <strong>{teclaPress}</strong>
                <input className="textDown" placeholder="Inicio de una tecla (Down)" onKeyDown={manejarDown}></input>
                <strong>{teclaDown}</strong>
            </header>
        </div>
    )
}

export default ComponenteEventos;