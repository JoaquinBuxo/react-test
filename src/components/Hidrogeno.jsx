import React from "react";
import Autonomia from './Autonomia';
import Carga from './Carga';

const styles = {
    height: 250,
    width: 250
}

class Hidrogeno extends React.PureComponent {

    render() {
        return (
            <div>
                <h3>Baterías de Hidrógeno</h3>
                <p>Las baterías de Hidrogeno, es una alternativa muy interesante a las baterías electricas</p>
                <img style= {styles}
                src='https://www.magnuscmd.com/wp-content/uploads/2019/06/Featured.jpg' alt='' />
                <Autonomia km={500} />
                <Carga carga='47%' />
            </div>
        )
    }

}

export default Hidrogeno;