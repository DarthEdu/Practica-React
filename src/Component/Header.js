// Importamos libreria para imagenes
import React from "react";
import logo from '../images/logo.png';

function Header (){
    return(
        <header>
            <img src={logo}
            className="logo-python"
            alt="logo" 
            width='100px'
            height='100px'
            />
    
            <h1>Aplicacion de Tareas</h1>
        </header>
    );
}

export default Header;