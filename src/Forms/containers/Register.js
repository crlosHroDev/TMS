import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import {registerUser} from '../../actions/authentication';


class Register extends Component {
    constructor(props){
      super(props)
      this.hidePassword=props.hidePassword
      this.state={
        username:'',
        email:'',
        password:'',
        errors:{}
      }
      this.handleInputChange=this.handleInputChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)

    }
    handleInputChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    handleSubmit=(e)=>{
      e.preventDefault()
      const user={
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
      }
      this.props.registerUser(user,this.props.history)
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({
          errors:nextProps.errors
        })
      }
    }

    render(){
      return(
          <form className='signupForm' onSubmit={this.handleSubmit}> 
            <label className=' image-replace cd-username'htmlFor='signup-username'>Usuario</label>
            <input className='Username' type='text' placeholder='Usuario' id='signup-username' name='username' onChange={this.handleInputChange} value={this.state.username}></input>
            <label className=' image-replace cd-email'htmlFor='signup-email'>Email</label>
            <input className='Email' type='email' placeholder='Email' id='signup-email' name='email' onChange={this.handleInputChange} value={this.state.email}></input>
            <label className=' image-replace cd-password'htmlFor='signup-password'>Password</label>
            <input className='password' type={this.props.hide ? "password":"true"} placeholder='Contraseña' id='signup-password' name='password' onChange={this.handleInputChange} value={this.state.password}></input>
            <a href="#0" className='hidePassword' onClick={this.hidePassword}>{!this.props.hide ? "Ocultar": "Mostrar"}</a>
            <input type='checkbox' id='accept-terms'></input>
            <label className='accept-terms' htmlFor='accept-terms'>Estoy de acuerdo con los <a href='#0' className='terms'>términos</a></label>
            <input type='submit'value='Crear Cuenta' className='butCreateAcc'></input>
        </form>
  
  
      )
    }

}

Register.propTypes={
  registerUser:propTypes.func.isRequired
}

function mapStateToProps(state,props){
  return{
    modalVisible:state.get('modal').get('modalVisible'),
    hide:state.get('modal').get('hide'),
    login:state.get('modal').get('login'),
    signUpActive:state.get('modal').get('signUpActive'),
    errors:state.get('errors')
  }
}

export default connect(mapStateToProps,{registerUser})(withRouter(Register));