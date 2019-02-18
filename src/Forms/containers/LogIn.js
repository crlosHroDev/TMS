import React,{Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loginUser} from '../../actions/index';

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
      this.props.loginUser(user)
    }

    componentWillReceiveProps(nextProps){
      this.setState({
        errors:nextProps.errors
      })
    }

    componentDidMount(){
      if(this.props.isAuthenticated){
        this.props.history.push('/')
      }
    }
    render(){
      return(
          <form className='signinForm' onSubmit={this.handleSubmit}> 
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
    signUpActive:state.get('modal').get('signUpActive'),
    errors:state.get('errors'),
    isAuthenticated:state.get('auth').get('isAuthenticated'),
    user:state.get('auth').get('user')
  }
}

export default connect(mapStateToProps,{loginUser})(withRouter(LogIn));