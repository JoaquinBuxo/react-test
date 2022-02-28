import './MensajesTable.component.css';

export default function MensajesTable(props) {
  return (
    <table className="MensajesTable">
      <thead className="Header">
        <tr>
          <th>Asunto</th>
          <th>Email</th>
          <th>Mensaje</th>
          <th>Acciones rápidas</th>
        </tr>
      </thead>
  
      <tbody>
        {props.mensajes.map(((mensaje, index) => 
          (<tr key={index}
             className = {(mensaje.leido ? 'ElementoLeido':'ElementoNOLeido')}>
             <td>{mensaje.asunto}</td>
             <td>{mensaje.email}</td>
             <td>{mensaje.mensaje}</td>
             <td>
               <button className="Leido" title="Marcar como leido"
               onClick={() => {props.clickMarcarLeido(index)}}>{(mensaje.leido ? '📖' : '📕')}</button>
               <button className="Borrar" title="Borrar mensaje"
               onClick={() => {props.clickEliminarUno(index)}}>🗑</button>
             </td>
          </tr>)
        ))}
      </tbody>
    </table>
  );
}