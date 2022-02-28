import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function Vista() {
    const [acceso, setAcceso] = useState(true);

    let accederLogin = () => { setAcceso(true) };
    let accederLogout = () => { setAcceso(false) };

    let boton;

    if(acceso) boton = <LogoutButton onClick={accederLogout}/>
    else boton = <LoginButton onClick={accederLogin}/>
 
    return (
        <div> {boton} </div>
    );
}