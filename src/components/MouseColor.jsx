import React, { useState } from "react";
import './MouseColor.css';

const MouseColor = () => {

    const [color, setColor] = useState('');
    const [stopColor, setStopColor] = useState(false);
    
    const capturarRaton = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'black'];
        if(!stopColor) setColor(colors[Math.floor(Math.random()*5)]);
    }

    const manejarStopColor = () => {
        setStopColor(!stopColor);
    }

    return(
        <div className="container-color" onMouseMove={capturarRaton} style= {{'backgroundColor' : color}}>
            <div className="container-2" onMouseEnter={capturarRaton} onMouseLeave={capturarRaton} onDoubleClick={manejarStopColor}></div>
        </div>
    )
}

export default MouseColor;