import React,{Component} from 'react';
import {connect} from 'react-redux';

class LogIn extends Component{
    constructor(props){
      super(props)
      this.state={
        email:'',
        password:'',
        errors:{}
      }
      this.handleInputChange=this.handleInputChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
      this.hidePassword=props.hidePassword
    }

    handleInputChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault()
      const user={
        email:this.state.email,
        password:this.state.password
      }
    }
    render(){
      return(
          <form className='signinForm' onSubmit={this.onSubmit}> 
            <label className=' image-replace cd-email-login'htmlFor='signin-email'>Email</label>
            <input className='Email-login' type='email' placeholder='Email' id='signin-email'name='email'onChange={this.handleInputChange} value={this.state.email}></input>
            <label className=' image-replace cd-password-login'htmlFor='signin-password'>Password</label>
         
            <input className='password-login' type={this.props.hide ? "password":"true"} placeholder='Contraseña' id='signin-password' name='password' onChange={this.handleInputChange} value={this.state.password}></input>
            <a href="#" className='hidePasswordLogin' onClick={this.hidePassword}>{!this.props.hide ? "Ocultar": "Mostrar"}</a>
            <input type='checkbox' id='remember-me'></input>
            <label className='rememberMe' htmlFor='remember-me'>Recuerdame</label>
            <input type='submit'value='Ingresar' className='butCreateAcc'></input>
        </form>
  
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

export default connect(mapStateToProps)(LogIn);