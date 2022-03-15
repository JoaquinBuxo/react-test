import logo from './logo.svg';
import './App.css';
import Articulo from './components/Articulo';
import Bitcoin from './components/Bitcoin';
import Formulario from './components/Formulario'
import ComponenteEventos from './components/ComponenteEventos';
import MouseColor from './components/MouseColor';
import Vista from './views/Vista.view'
import Mensajes from './views/Mensajes/Mensajes.view';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginSesion } from './redux/actions/sesionActions';

function App() {
  
  const dispatch = useDispatch();
  const togleSesion = useSelector(state => state.sesion);

  let login = (event) => {
    event.preventDefault();
    dispatch(loginSesion());
  }

  return (
    <div>
      <div className="App">
      <header>
        <h1>ReactJS</h1>
        <button onClick={login}>{ togleSesion ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
      </header>
 
      <div className="App-body">
        { togleSesion ? <Mensajes></Mensajes> : null}
      </div>     
    </div>
    </div>
  )
}

export default App;
