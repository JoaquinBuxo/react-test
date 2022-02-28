import './MensajesHeader.component.css';

export default function MensajesHeader(props) {

    return (
        <div className="MensajesHeader">
            <form onSubmit={props.crearNuevo}>
                <input placeholder="Asunto" name="asunto" onChange={props.values} required></input>
                <input type="email" placeholder="Email" name="email" onChange={props.values} required></input>
                <input placeholder="Mensaje" name="mensaje" onChange={props.values} required></input>

                <button type="submit" className="Nuevo">Nuevo</button>
                <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>
            </form>           
        </div> 
    );
}