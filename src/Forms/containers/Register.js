import React,{Component} from 'react';


class Register extends Component {
  constructor(props){
    super(props)
}

    render(){
      return(
          <form className='signupForm' action='/' method='POST'> 
            <label className=' image-replace cd-username'htmlFor='signup-username'>Usuario</label>
            <input className='Username' type='text' placeholder='Usuario' id='signup-username' name='username'></input>
            <label className=' image-replace cd-email'htmlFor='signup-email'>Email</label>
            <input className='Email' type='email' placeholder='Email' id='signup-email' name='email'></input>
            <label className=' image-replace cd-password'htmlFor='signup-password'>Password</label>
         
            <input className='password' type={props.hide ? "password":"true"} placeholder='Contraseña' id='signup-password' name='password'></input>
            <a href="#0" className='hidePassword' onClick={props.hidePassword}>{!props.hide ? "Ocultar": "Mostrar"}</a>
            <input type='checkbox' id='accept-terms'></input>
            <label className='accept-terms' htmlFor='accept-terms'>Estoy de acuerdo con los <a href='#0' className='terms'>términos</a></label>
            <input type='submit'value='Crear Cuenta' className='butCreateAcc'></input>
        </form>
  
  
      )
    }

}

export default Register;