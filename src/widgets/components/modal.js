import React from "react";
import "./modal.css";

function Modal(props) {
  // debugger;
  return (
    <div className="modal">
        <nav className='navModal'>
          <ul className='loginSignup' >
          <li className='loginmodal' style={props.login ? {backgroundColor:'#ffffff'}:{backgroundColor:'#d2d8d8'}}>
            <a  href="#0" onClick={props.signIn}>Login</a>
            </li>
            <li className='signUp' style={props.login ? {backgroundColor:'#d2d8d8'}:{backgroundColor:'#ffffff'}}>
            <a href="#0" onClick={props.signUp} >SignUp</a>
            </li>
          </ul>
        </nav>
        {
          !props.login &&
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
        }

        {
          props.login &&
          <form className='signinForm'> 
            <label className=' image-replace cd-email-login'htmlFor='signin-email'>Email</label>
            <input className='Email-login' type='email' placeholder='Email' id='signin-email'></input>
            <label className=' image-replace cd-password-login'htmlFor='signin-password'>Password</label>
         
            <input className='password-login' type={props.hide ? "password":"true"} placeholder='Contraseña' id='signin-password'></input>
            <a href="#0" className='hidePasswordLogin' onClick={props.hidePassword}>{!props.hide ? "Ocultar": "Mostrar"}</a>
            <input type='checkbox' id='remember-me'></input>
            <label className='rememberMe' htmlFor='remember-me'>Recuerdame</label>
            <input type='submit'value='Ingresar' className='butCreateAcc'></input>
        </form>
        }
        </div>
  );
}


export default Modal;
