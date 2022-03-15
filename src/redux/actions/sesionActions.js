export const ACTIONS_LOGIN = {
    LOGIN: "INICIAR_SESION"
};

export const loginSesion = () => {
    return {
        type: ACTIONS_LOGIN.LOGIN
    }
}