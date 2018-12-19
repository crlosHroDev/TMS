import React from "react";
import "./modal.css";
import tmsIcon from "../../images/tms-icon.png";

function Modal(props) {
  return (
    <div id="modal">
      <form>
        <button className="closeButton" onClick={props.hideModal}>
          X
        </button>
        <figure className="tmsIcon">
          <img src={tmsIcon} />
        </figure>
        <div className="inputGrid">
          <div className="subItem1">Usuario:</div>
          <div className="subItem2">
            <input type="text" />
          </div>
          <div className="subItem3">Contraseña:</div>
          <div className="subItem4">
            <input type="text" />
          </div>
        </div>
        <button type="button" id="btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Modal;
