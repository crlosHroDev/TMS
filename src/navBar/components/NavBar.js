import React from "react";
import {Link} from 'react-router-dom';
import "./NavBar.css";
import logo from "../../images/logo.jpg";
import truckLogo from "../../images/truck_logo.png";

function NavBar(props) {
  
  return (
    <nav>
      <ul>
        <figure className="logo">
          <img src={truckLogo} />
        </figure>
        <li id='services'>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <a href='#'>Clientes</a>
          {/* <ul className="subNav">
            <li>
              <Link to="/mision">Misión</Link>
            </li>
            <li>
              <Link to="/vision">Visión</Link>
            </li>
            <li>
              <Link to="/valores">Valores Corporativos</Link>
            </li>
          </ul> */}
        </li>
        <li className="contact">
          <Link to="/contacto">Trabaja con Nosotros!</Link>
        </li>
        <div className="login" onClick={props.showModal}>
          <img src="https://img.icons8.com/bubbles/50/000000/gender-neutral-user.png" />
          <li>
            <a>Registrarme/Iniciar Sesión</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
