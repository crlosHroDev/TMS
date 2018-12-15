import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <ul>
            <li>
                <a href='#'>¿Quienes somos?</a>
                <ul className='subNav'>
                    <li><a href='#'>Misión</a></li>
                    <li><a href='#'>Visión</a></li>
                    <li><a href='#'>Valores Corporativos</a></li>
                </ul>
            </li>
            <li><a href='#'>Servicios</a></li>
            <div className='login'>
                <img src='https://img.icons8.com/bubbles/50/000000/gender-neutral-user.png'></img>
                <li><a href='#'>Registrarme/Iniciar Sesión</a></li>
            </div>
            </ul>
        </nav>
    )
}

export default NavBar;

