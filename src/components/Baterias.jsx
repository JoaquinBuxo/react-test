 import React from "react";
 import Autonomia from './Autonomia';
 
 function BateriasLitio() {
     return (
        <div>
            <h3>Baterías de Litio</h3>
            <p>
                Gracias a las nuevas tecnologias que afectan a las baterías, la autonomía de los coches elétricos está aumentando a pasos agigantados.
            </p>
            <Autonomia km={400} />
        </div>
     )
 }

 export default BateriasLitio;