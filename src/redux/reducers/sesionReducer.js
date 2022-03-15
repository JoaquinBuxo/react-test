import { ACTIONS_LOGIN } from '../actions/sesionActions';


export const sesion = (state = [], action) => {
    switch(action.type) {
        case ACTIONS_LOGIN.LOGIN:
          state = !state;    
          return state;
        default:
          return state;
      }
}

export default sesion;