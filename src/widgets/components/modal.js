import React from "react";
import "./modal.css";

function Modal(props) {
  // debugger;
  return (
    <div className="modal">
        <nav className='navModal'>
          <ul className='loginSignup'>
            <li className='loginmodal'>Login</li>
            <li className='signUp'>SignUp</li>
          </ul>
        </nav>
          <form className='signupForm'> 
            <label className=' image-replace cd-username'htmlFor='signup-username'>Usuario</label>
            <input className='Username' type='text' placeholder='Usuario' id='signup-username'></input>
            <label className=' image-replace cd-email'htmlFor='signup-email'>Email</label>
            <input className='Email' type='email' placeholder='Email' id='signup-email'></input>
            <label className=' image-replace cd-password'htmlFor='signup-password'>Password</label>
           
            <input className='password' type={props.hide ? "password":"true"} placeholder='Contraseña' id='signup-password'></input>
            <a href="#0" className='hidePassword' onClick={props.hidePassword}>{!props.hide ? "Ocultar": "Mostrar"}</a>
            <input type='checkbox' id='accept-terms'></input>
            <label className='accept-terms' htmlFor='accept-terms'>Estoy de acuerdo con los <a href='#0' className='terms'>términos</a></label>
            <input type='submit'value='Crear Cuenta' className='butCreateAcc'></input>
          </form>
        </div>
  );
}


export default Modal;
