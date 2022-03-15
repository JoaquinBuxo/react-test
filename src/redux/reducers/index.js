import { ACTIONS_MENSAJES } from '../actions';

const initialState = {
    mensajes: []
};

export const mensajes = (state = initialState.mensajes, action) => {
    switch(action.type) {
      case ACTIONS_MENSAJES.BORRAR:
        state.splice(action.payload, 1);
  
        return [...state];
      case ACTIONS_MENSAJES.VACIAR:
        return [];
      case ACTIONS_MENSAJES.CREAR:
        state.push(action.payload);
  
        return [...state];
      case ACTIONS_MENSAJES.LEER:
        state[action.payload].leido = !state[action.payload].leido;
  
        return [...state];
      default:
        return [...state];
    }
}
  
export default mensajes;