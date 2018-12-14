import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav className='navBar'>
            <ul className='services'>
            <li><img></img></li>
            <li><a href=''>¿Quienes somos?</a>
                <ul className='navSub1'>
                    <li>Misión</li>
                    <li>Visión</li>
                    <li>Valores Coporativos</li>
                </ul>
            </li>
            <li><a href=''>Servicios</a></li>
            </ul>
            <a href='' className='login'>
            <div className='login'>
                <li>Registrarse/Iniciar Sesión</li>
                <img src="https://img.icons8.com/bubbles/50/000000/gender-neutral-user.png"></img>
            </div>
            </a>
        </nav>
    )
}

export default NavBar;