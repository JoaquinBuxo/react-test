export const ACTIONS_MENSAJES = {
    VACIAR: "VACIAR_MENSAJES",
    BORRAR: "BORRAR_MENSAJES",
    CREAR: "CREAR_MENSAJES",
    LEER: "LEER_MENSAJES",
    LOGIN: "LOGIN_MENSAJES"
}

export const vaciarMensajes = () => {
    return {
        type: ACTIONS_MENSAJES.VACIAR,
    }
}

export const borrarMensaje = (index) => {
    return {
        type: ACTIONS_MENSAJES.BORRAR,
        payload: index
    }
}

export const crearMensaje = (msg) => {
    return {
        type: ACTIONS_MENSAJES.CREAR,
        payload: msg
    }
}

export const leerMensaje = (index) => {
    return {
        type: ACTIONS_MENSAJES.LEER,
        payload: index
    }
}