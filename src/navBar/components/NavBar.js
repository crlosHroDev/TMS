import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav className='navBar'>
            <ul className='services'>
            <li><img></img></li>
            <li>¿Quienes somos?</li>
            <li>Servicios</li>
            </ul>
            <div className='login'>
                <ul><li>Registrarse/Iniciar Sesión</li></ul>
            </div>
        </nav>
    )
}

export default NavBar;