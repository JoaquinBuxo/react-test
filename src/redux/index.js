/* Fichero redux/index.js */
import { createStore, combineReducers } from 'redux';
import { mensajes } from './reducers';
import { sesion } from './reducers/sesionReducer'; 


// STORE - El estado global de la aplicación.
let reducers = combineReducers({
  mensajes,
  sesion
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;