import React from 'react';

function FormSignIn(props){
    return(
        <form className='signinForm' action='/' method='POST'> 
          <label className=' image-replace cd-email-login'htmlFor='signin-email'>Email</label>
          <input className='Email-login' type='email' placeholder='Email' id='signin-email'name='email'></input>
          <label className=' image-replace cd-password-login'htmlFor='signin-password'>Password</label>
       
          <input className='password-login' type={props.hide ? "password":"true"} placeholder='Contraseña' id='signin-password' name='password'></input>
          <a href="#0" className='hidePasswordLogin' onClick={props.hidePassword}>{!props.hide ? "Ocultar": "Mostrar"}</a>
          <input type='checkbox' id='remember-me'></input>
          <label className='rememberMe' htmlFor='remember-me'>Recuerdame</label>
          <input type='submit'value='Ingresar' className='butCreateAcc'></input>
      </form>

    )
}

export default FormSignIn;