import logo from './logo.svg';
import './App.css';
import Articulo from './components/Articulo';
import Bitcoin from './components/Bitcoin';
import Formulario from './components/Formulario'
import ComponenteEventos from './components/ComponenteEventos';
import MouseColor from './components/MouseColor';
import Vista from './views/Vista.view'
import Mensajes from './views/Mensajes/Mensajes.view';

function App() {
  return (
    <div>
      <div className="App">
      <header>
        <h1>ReactJS</h1>
      </header>
 
      <div className="App-body">
        <Mensajes></Mensajes>
      </div>     
    </div>
    </div>
  )
}

export default App;
