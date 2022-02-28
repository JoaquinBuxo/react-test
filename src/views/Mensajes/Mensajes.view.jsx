
import './Mensajes.view.css';

import { useState } from 'react';
import MensajesHeader from '../../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../../components/MensajesTable/MensajesTable.component';


export default function Mensajes() {
    const [mensajes, setMensajes] = useState([]);
    const [asunto, setAsunto] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [vacio, setVacio] = useState(false);
    const [corto, setCorto] = useState(false);
    
    let eliminarMensajes = () => {
        setMensajes([]);
    };
        
    let eliminarMensaje = (index) => {
        mensajes.splice(index, 1);
        setMensajes([...mensajes]);
    };

    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido;
        setMensajes([...mensajes]);
    }

    let setValuesForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        switch(name) {
            case 'asunto': setAsunto(value); break;
            case 'email': setEmail(value); break;
            case 'mensaje': setMensaje(value); break;
            default: break;
        }        
    }

    let crearMensaje = (event) => {
        event.preventDefault();

        let nuevo = {
            "asunto": asunto,
            "email": email,
            "mensaje": mensaje,
            "leido": false
        };

        if (nuevo.asunto === '' || nuevo.email === '' || nuevo.mensaje === '') {
            setVacio(true);
        } else {
            setVacio(false);
            if (nuevo.mensaje.length < 10) {
                setCorto(true);
            } else {
                setCorto(false);
                setMensajes(mensajes => [...mensajes, nuevo]);
            } 
        }    
    };

    return (
        <div className="Mensajes">
            <MensajesHeader crearNuevo={crearMensaje} clickEliminar={eliminarMensajes} values={setValuesForm}>
            </MensajesHeader>
            { vacio ? <p>Todos los campos son necesarios</p> : null}
            { corto ? <p>El mensaje debe contener más de 10 caracteres</p> : null}
            
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje} clickMarcarLeido={leerMensaje}>
            </MensajesTable>
        </div>
    );
}