import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.jpg";
import truckLogo from "../../images/truck_logo.png";

function NavBar() {
  return (
    <nav>
      <ul>
        <figure className="logo">
          <img src={truckLogo} />
        </figure>
        <li id="history">
          <a href="#">¿Quienes somos?</a>
          <ul className="subNav">
            <li>
              <a href="#">Misión</a>
            </li>
            <li>
              <a href="#">Visión</a>
            </li>
            <li>
              <a href="#">Valores Corporativos</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li className="contact">
          <a href="#">Contáctanos</a>
        </li>
        <div className="login">
          <img src="https://img.icons8.com/bubbles/50/000000/gender-neutral-user.png" />
          <li>
            <a href="#">Registrarme/Iniciar Sesión</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
