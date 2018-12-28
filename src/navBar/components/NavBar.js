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
        <li id="history">
          <Link to="/historia">¿Quienes somos?</Link>
          <ul className="subNav">
            <li>
              <Link to="/mision">Misión</Link>
            </li>
            <li>
              <Link to="/vision">Visión</Link>
            </li>
            <li>
              <Link to="/valores">Valores Corporativos</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className="contact">
          <Link to="/contacto">Contáctanos</Link>
        </li>
        <div className="login" onClick={props.showModal}>
          <img src="https://img.icons8.com/bubbles/50/000000/gender-neutral-user.png" />
          <li>
            <Link to="/registro">Registrarme/Iniciar Sesión</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
