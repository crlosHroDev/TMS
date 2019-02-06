import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import Modal from '../components/modal';

class ModalContainer extends Component { 
  constructor(props){
    super(props)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount(){
    document.addEventListener("click",this.handleClickOutside)
  }
  
  componentWillUnmount(){
    document.removeEventListener("click", this.handleClickOutside)
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.dispatch({
        type: "CLOSE_MODAL" 
      });
    }
  }

  hidePassword=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch({
      type:'HIDE_PASSWORD'
    })
  }

  signIn=()=>{
    this.props.dispatch({
      type:'LOGIN'
    })
  }

  signUp=()=>{
    this.props.dispatch({
      type:'SIGN_UP'
    })
  }

  render() {
    return(
      // <Modal 
      // hideModal={this.hideModal} 
      // hidePassword={this.hidePassword} 
      // hide={this.props.hide} 
      // login={this.props.login}
      // signIn={this.signIn} 
      // signUp={this.signUp}
      // /> 

      <div className="modal" ref={this.setWrapperRef}>
      <nav className='navModal'>
        <ul className='loginSignup' >
        <li className='loginmodal' style={this.login ? {backgroundColor:'#ffffff'}:{backgroundColor:'#d2d8d8'}}>
          <a  href="#0" onClick={this.signIn}>Login</a>
          </li>
          <li className='signUp' style={this.login ? {backgroundColor:'#d2d8d8'}:{backgroundColor:'#ffffff'}}>
          <a href="#0" onClick={this.signUp} >SignUp</a>
          </li>
        </ul>
      </nav>
      {
        !this.login &&
        <form className='signupForm'> 
          <label className=' image-replace cd-username'htmlFor='signup-username'>Usuario</label>
          <input className='Username' type='text' placeholder='Usuario' id='signup-username'></input>
          <label className=' image-replace cd-email'htmlFor='signup-email'>Email</label>
          <input className='Email' type='email' placeholder='Email' id='signup-email'></input>
          <label className=' image-replace cd-password'htmlFor='signup-password'>Password</label>
       
          <input className='password' type={this.hide ? "password":"true"} placeholder='Contraseña' id='signup-password'></input>
          <a href="#0" className='hidePassword' onClick={this.hidePassword}>{!this.hide ? "Ocultar": "Mostrar"}</a>
          <input type='checkbox' id='accept-terms'></input>
          <label className='accept-terms' htmlFor='accept-terms'>Estoy de acuerdo con los <a href='#0' className='terms'>términos</a></label>
          <input type='submit'value='Crear Cuenta' className='butCreateAcc'></input>
      </form>
      }

      {
        this.login &&
        <form className='signinForm'> 
          <label className=' image-replace cd-email-login'htmlFor='signin-email'>Email</label>
          <input className='Email-login' type='email' placeholder='Email' id='signin-email'></input>
          <label className=' image-replace cd-password-login'htmlFor='signin-password'>Password</label>
       
          <input className='password-login' type={this.hide ? "password":"true"} placeholder='Contraseña' id='signin-password'></input>
          <a href="#0" className='hidePasswordLogin' onClick={this.hidePassword}>{!this.hide ? "Ocultar": "Mostrar"}</a>
          <input type='checkbox' id='remember-me'></input>
          <label className='rememberMe' htmlFor='remember-me'>Recuerdame</label>
          <input type='submit'value='Ingresar' className='butCreateAcc'></input>
      </form>
      }
      </div>

    )
  }
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modal').get('modalVisible'),
    hide:state.get('modal').get('hide'),
    login:state.get('modal').get('login'),
    signUpActive:state.get('modal').get('signUpActive')
  }
}

export default connect(mapStateToProps)(ModalContainer);
