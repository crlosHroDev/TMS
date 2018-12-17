import React from "react";
import "./services.css";
import calculator from "../../images/calculator-icon.png";
import tracking from "../../images/truck-tracking.png";
import payment from "../../images/payment-icon.png";

function Services() {
  return (
    <section className="services">
      <p>Servicios en Linea</p>
      <div>
        <a href="">
          <img src={tracking} />
        </a>
        <p>Rastreo</p>
      </div>
      <div>
        <img src={calculator} />
        <p>Cotizador</p>
      </div>
      <div>
        <img src={payment} />
        <p>Pago de Factura</p>
      </div>
    </section>
  );
}

export default Services;
